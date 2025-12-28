import React, { useState } from 'react';

export default function SearchBar() {
  const [tab, setTab] = useState('products');
  const [query, setQuery] = useState('');

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
      <div className="flex gap-2 overflow-auto">
        <button onClick={() => setTab('products')} className={`px-3 py-2 rounded ${tab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
          Products
        </button>
        <button onClick={() => setTab('services')} className={`px-3 py-2 rounded ${tab === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
          Services
        </button>
        <button onClick={() => setTab('jobs')} className={`px-3 py-2 rounded ${tab === 'jobs' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
          Jobs
        </button>
        <button onClick={() => setTab('people')} className={`px-3 py-2 rounded ${tab === 'people' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
          Find persons
        </button>
      </div>

      <div className="mt-3 flex gap-2">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={tab === 'jobs' ? 'Search jobs (global)' : 'Search nearby...'} className="flex-1 border rounded px-3 py-2" />
        <button onClick={() => setQuery('')} className="px-3 py-2 bg-gray-100 rounded">Clear</button>
      </div>
    </div>
  );
}
