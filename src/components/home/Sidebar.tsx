import React from 'react';
import Link from 'next/link';
import ReacherLogo from './ReacherLogo';

const RoleButton = ({ href, active, children }: any) => (
  <Link href={href} className={`block px-3 py-2 rounded-lg ${active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
    {children}
  </Link>
);

export default function Sidebar() {
  return (
    <div className="h-full p-4 flex flex-col">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <ReacherLogo />
          <Link href="/home" className="text-sm px-3 py-1 rounded-lg bg-sky-100 text-sky-700">Home</Link>
        </div>
        <div className="text-sm text-gray-500 mt-2">Local products · services · jobs</div>
      </div>

      <nav className="space-y-2 mb-6">
        <Link href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Messages</Link>
        <Link href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Favourites</Link>
        <Link href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Contacts</Link>
        <Link href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Settings</Link>
      </nav>

      <div className="mb-6">
        <div className="font-semibold mb-2">Switch role</div>
        <div className="grid grid-cols-3 gap-2">
          <RoleButton href="/dashboard/consumer" active={true}>Consumer</RoleButton>
          <RoleButton href="/dashboard/seller" active={false}>Seller</RoleButton>
          <RoleButton href="/dashboard/provider" active={false}>Service</RoleButton>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <Link href="#" className="text-sm text-gray-600 hover:underline">Profile settings</Link>
      </div>
    </div>
  );
}
