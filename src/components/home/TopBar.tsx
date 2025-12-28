import React from 'react';

export default function TopBar({ onReport }: { onReport?: () => void }) {
  return (
    <header className="sticky top-0 bg-white border-b z-10">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-600">Welcome back,</div>
          <div className="font-semibold">Good to see you</div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onReport} className="px-3 py-2 text-sm bg-red-50 text-red-700 rounded">Report / Escalate</button>
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>
      </div>
    </header>
  );
}
