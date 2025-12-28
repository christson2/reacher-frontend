"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HomeAppPage from './home/page';

export default function LandingPage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken') || localStorage.getItem('jwt_token');
      setAuthenticated(Boolean(token));
    }
  }, []);

  // If authenticated show the app home UI inline (client-side)
  if (authenticated) return <HomeAppPage />;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Nav */}
      <header className="w-full bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-extrabold text-blue-600">Reacher</Link>
            <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              <a href="#how" className="hover:text-gray-900">How it works</a>
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#safety" className="hover:text-gray-900">Safety</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-sm text-gray-700 hover:underline">Login</Link>
            <Link href="/auth/signup" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm shadow-sm">Get Started</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 md:p-12 shadow-md">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              Find Products & Services Near You — Fast.
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Discover trusted sellers and service providers in your community without stress, calls, or travel.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/auth/signup" className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow">Get Started</Link>
              <Link href="/auth/login" className="inline-flex items-center justify-center px-5 py-3 border border-gray-200 rounded-lg text-gray-700">Login</Link>
            </div>
          </div>

          {/* Search preview card (non-functional) */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Search Products</div>
            <div className="flex gap-3">
              <input className="flex-1 border rounded-lg px-3 py-2" placeholder="Enter product or service name" />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">The problem</h2>
            <p className="text-gray-600 mt-2">Finding nearby trusted sellers, service providers and jobs is slow and relies on personal networks.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Trusted providers</h3>
              <p className="text-sm text-gray-600 mt-1">Hard to find trustworthy sellers nearby.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Local sellers</h3>
              <p className="text-sm text-gray-600 mt-1">People travel far or ask neighbors for recommendations.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Job access</h3>
              <p className="text-sm text-gray-600 mt-1">Opportunities are often shared informally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold">How Reacher works</h2>
          <p className="text-gray-600 mt-2">Simple steps to find what you need.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <StepCard number={1} title="Search" desc="Search for products, services or jobs" emoji="🔍" />
            <StepCard number={2} title="Local results" desc="Results filtered by locality" emoji="📍" />
            <StepCard number={3} title="Profiles" desc="See verified profiles & portfolios" emoji="🧾" />
            <StepCard number={4} title="Contact" desc="Call or WhatsApp directly" emoji="📞" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Core features</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FeatureCard title="Local search" desc="Find items by location" emoji="🔍" />
            <FeatureCard title="Profiles" desc="Seller & provider profiles" emoji="🧑‍💼" />
            <FeatureCard title="Galleries" desc="Product & portfolio galleries" emoji="🖼️" />
            <FeatureCard title="Contact" desc="Call & WhatsApp buttons" emoji="📞" />
            <FeatureCard title="Reporting" desc="Report and escalate issues" emoji="⚠️" />
            <FeatureCard title="Trust" desc="Trust indicators (green/yellow/red)" emoji="🟢" />
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Trust & safety</h2>
          <p className="text-gray-600 mt-2">Community reporting and clear trust indicators help keep transactions safer.</p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Who Reacher is for</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <WhoCard title="Consumers" desc="Find what you need nearby" emoji="🛒" />
            <WhoCard title="Sellers" desc="Reach local buyers" emoji="🏷️" />
            <WhoCard title="Service Providers" desc="Get discovered easily" emoji="🧰" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Stop searching. Start reaching.</h2>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/auth/signup" className="px-5 py-3 bg-white text-blue-600 rounded-lg font-medium">Create Free Account</Link>
            <Link href="/auth/login" className="px-5 py-3 border border-white rounded-lg">Login</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <div className="font-semibold">About Reacher</div>
            <p className="mt-2">A simple, local marketplace to find products, services and jobs.</p>
          </div>
          <div>
            <div className="font-semibold">Resources</div>
            <div className="mt-2 flex flex-col gap-1">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold">Reacher</div>
            <div className="mt-2">© {new Date().getFullYear()} — Connecting local communities</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StepCard({ number, title, desc, emoji }: any) {
  return (
    <div className="bg-gray-50 border rounded-lg p-4 text-center">
      <div className="text-3xl">{emoji}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  );
}

function FeatureCard({ title, desc, emoji }: any) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex items-start gap-3">
      <div className="text-2xl">{emoji}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </div>
  );
}

function WhoCard({ title, desc, emoji }: any) {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
      <div className="text-3xl">{emoji}</div>
      <div className="mt-3 font-semibold">{title}</div>
      <div className="text-sm text-gray-600 mt-1">{desc}</div>
    </div>
  );
}
