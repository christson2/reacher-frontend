"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/home/Sidebar';
import TopBar from '@/components/home/TopBar';
import SearchBar from '@/components/home/SearchBar';
import FeedCard from '@/components/home/FeedCard';
import ReportModal from '@/components/home/ReportModal';
import SkeletonCard from '@/components/home/SkeletonCard';
import RightPanel from '@/components/home/RightPanel';
import FriendPost from '@/components/home/FriendPost';
import JobCard from '@/components/home/JobCard';

export default function HomeAppPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [showReport, setShowReport] = useState(false);
  const [feed, setFeed] = useState<any[]>([]);
  const [loadingFeed, setLoadingFeed] = useState(true);
  const [feedError, setFeedError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken') || localStorage.getItem('jwt_token');
      if (!token) {
        router.replace('/auth/login');
        setAuthenticated(false);
        return;
      }
      // ensure apiClient knows about token
      try {
        const { apiClient } = require('@/services/api/client');
        apiClient.setToken(token);
      } catch (e) {
        // ignore in SSR
      }
      setAuthenticated(true);
    }
  }, [router]);

    useEffect(() => {
      // Load token into apiClient if present
      try {
        // dynamic import to avoid SSR issues
        const { apiClient } = require('@/services/api/client');
        apiClient.loadTokenFromStorage();
      } catch (err) {
        // ignore in SSR
      }

      const fetchData = async () => {
        setLoadingFeed(true);
        setFeedError(null);
        try {
          const { apiClient } = await import('@/services/api/client');
          // Try products as feed
          const products = await apiClient.get<any[]>('/products');
          if (products && products.length) {
            // Normalize minimal fields expected by FeedCard
            const normalized = products.map((p: any) => ({
              id: p.id || p._id || Math.random().toString(36).slice(2, 9),
              author: p.sellerName || p.author || p.owner || p.name || 'Unknown',
              role: p.sellerRole || 'Seller',
              title: p.title || p.name || p.description || 'Listing',
              location: p.location || p.city || 'Nearby',
              trust: p.trust || 'green',
              featured: p.featured || false,
              verified: p.verified || false,
            }));
            setFeed(normalized);
            setLoadingFeed(false);
            return;
          }
        } catch (err) {
          // fallthrough to messages
        }

        // Fallback: fetch messages as feed
        try {
          const { apiClient } = await import('@/services/api/client');
          const msgs = await apiClient.get<any[]>('/messages');
          if (msgs && msgs.length) {
            const normalized = msgs.map((m: any) => ({
              id: m.id || m._id || Math.random().toString(36).slice(2, 9),
              author: m.authorName || m.author || 'Unknown',
              role: m.role || 'User',
              title: m.text || m.summary || 'Post',
              location: m.location || '',
              trust: 'green',
              featured: false,
              verified: m.verified || false,
            }));
            setFeed(normalized);
            setLoadingFeed(false);
            return;
          }
        } catch (err) {
          // final fallback to small mock
          setFeed([
            { id: '1', author: 'Amina Okoye', role: 'Seller', title: 'Fresh tomatoes - 5kg', location: 'Akure', trust: 'green', verified: true, featured: true, image: undefined },
          ]);
          setLoadingFeed(false);
          setFeedError('Failed to load feed from API; using fallback content.');
        }
      };

      fetchData();
    }, []);

  if (authenticated === null) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <aside className="hidden md:block w-72 h-screen sticky top-0">
          <Sidebar />
        </aside>

        <main className="flex-1">
          <TopBar onReport={() => setShowReport(true)} />

          <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <SearchBar />

              {/* Search results section */}
              <section className="mt-6">
                <h3 className="text-sm text-gray-500 mb-3">Search Results</h3>
                {loadingFeed ? (
                  // show skeletons while loading
                  <>
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </>
                ) : feed.length ? (
                  feed.map((item) => <FeedCard key={item.id} post={item} />)
                ) : (
                  <div className="bg-white p-4 rounded-lg shadow text-center text-gray-500">No results found.</div>
                )}
                {feedError && <div className="mt-3 text-xs text-red-600">{feedError}</div>}
              </section>

              {/* Jobs section */}
              <section className="mt-6">
                <h3 className="text-sm text-gray-500 mb-3">Job posts</h3>
                <JobCard job={{ roleTitle: 'Delivery Rider', company: 'FastShip', location: 'Akure', posted: '1d', summary: 'Part-time riders for local deliveries' }} />
              </section>

              {/* Friends / favourite contacts feed */}
              <section className="mt-6">
                <h3 className="text-sm text-gray-500 mb-3">Posts from friends & favourites</h3>
                <FriendPost post={{ author: 'Aisha Bello', time: '2h', text: "Just tried a new market stall — amazing produce!", image: undefined }} />
                <FriendPost post={{ author: 'City Hospital', time: '1d', text: "Our services now include teleconsultation.", image: undefined }} />
              </section>
            </div>

            <aside className="hidden lg:block">
              <RightPanel />
            </aside>
          </div>
        </main>
      </div>

      <ReportModal open={showReport} onClose={() => setShowReport(false)} />
    </div>
  );
}
