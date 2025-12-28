import '@/styles/globals.css';

export const metadata = {
  title: 'Reacher',
  description: 'Find products, services and jobs near you',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
