import { redirect } from 'next/navigation';

export default function DashboardPage() {
  // Server-side redirect to homepage
  redirect('/');
}
