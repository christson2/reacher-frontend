import React from 'react';

export default function TrustBadge({ level }: { level: string }) {
  const color = level === 'green' ? 'bg-green-100 text-green-700' : level === 'yellow' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700';
  const label = level === 'green' ? 'Good' : level === 'yellow' ? 'Reported' : 'High Risk';
  return <span className={`text-xs px-2 py-1 rounded ${color}`}>{label}</span>;
}
