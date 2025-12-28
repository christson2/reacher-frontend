import React from 'react';
import TrustBadge from './TrustBadge';
import VerificationBadge from './VerificationBadge';

export default function FeedCard({ post }: any) {
  return (
    <article className="bg-white rounded-lg p-4 shadow mb-4">
      <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold flex items-center gap-2">
                <span>{post.author}</span>
                {post.verified && <VerificationBadge />}
              </div>
              <div className="text-xs text-gray-500">{post.role} • {post.location}</div>
            </div>
            <div className="flex items-center gap-2">
              <TrustBadge level={post.trust} />
              {post.featured && <span className="text-xs px-2 py-1 bg-yellow-100 rounded">Featured</span>}
            </div>
          </div>

          <div className="mt-3 text-gray-800 font-medium">{post.title}</div>

          {/* media image if present */}
          {post.image && (
            <img src={post.image} alt={post.title} loading="lazy" className="mt-3 rounded max-h-56 w-full object-cover" />
          )}

          <div className="mt-4 flex gap-2">
            <button className="px-3 py-2 bg-blue-600 text-white rounded text-sm">View</button>
            <button className="px-3 py-2 border rounded text-sm">Message</button>
          </div>
        </div>
      </div>
    </article>
  );
}
