import React, { useState, useEffect } from 'react'
import JobCard from './JobCard'

function JobsTab(){
  const jobs = [
    { id: 'j1', roleTitle: 'Plumber - Local', company: 'Fixit Co', location: 'Akure', posted: '2d', summary: 'Reliable plumber needed for weekend jobs' },
    { id: 'j2', roleTitle: 'Delivery Rider', company: 'FastShip', location: 'Akure', posted: '1d', summary: 'Part-time riders for local deliveries' }
  ];

  return (
    <div>
      {jobs.map(j => <JobCard key={j.id} job={j} />)}
    </div>
  )
}

function MusicTab(){
  const tracks = [
    { id: 'm1', title: 'Summer Beat', artist: 'DJ Ayo' },
    { id: 'm2', title: 'Soft Vibes', artist: 'Mika' }
  ];

  return (
    <div className="space-y-3">
      {tracks.map(t => (
        <div key={t.id} className="bg-white p-3 rounded-lg shadow flex items-center justify-between">
          <div>
            <div className="font-semibold text-sky-700">{t.title}</div>
            <div className="text-xs text-gray-500">{t.artist}</div>
          </div>
          <button className="px-3 py-2 bg-sky-100 text-sky-700 rounded">Play</button>
        </div>
      ))}
    </div>
  )
}

export default function RightPanel(){
  const [tab, setTab] = useState<'jobs'|'music'>('jobs')
  const [jobs, setJobs] = useState<any[]>([])
  const [loadingJobs, setLoadingJobs] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true)
      try {
        const { apiClient } = await import('@/services/api/client');
        apiClient.loadTokenFromStorage();
        // Prefer a /jobs endpoint if available
        try {
          const j = await apiClient.get<any[]>('/jobs');
          setJobs(j || []);
          return;
        } catch (e) {
          // fallback to products (filtering server-side)
          const p = await apiClient.get<any[]>('/products');
          if (p && p.length) {
            const joblike = p.filter((x: any) => x.type === 'job' || /job/i.test(x.title || ''));
              setJobs(joblike);
              setLoadingJobs(false)
              return;
          }
        }
      } catch (err) {
        // ignore and leave jobs empty
      }
        setLoadingJobs(false)
    }
    fetchJobs();
  }, [])

  return (
    <div className="p-4 sticky top-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold text-sky-700">Promoted</div>
          <div className="text-xs text-gray-400">Sponsored</div>
        </div>
        <div className="mb-3">
          <button onClick={() => setTab('jobs')} className={`px-3 py-2 rounded mr-2 ${tab === 'jobs' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Jobs</button>
          <button onClick={() => setTab('music')} className={`px-3 py-2 rounded ${tab === 'music' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Music</button>
        </div>

        <div>
          {tab === 'jobs' ? (
            loadingJobs ? (
              <>
                <div className="h-24 bg-gray-100 rounded mb-3 animate-pulse" />
                <div className="h-24 bg-gray-100 rounded mb-3 animate-pulse" />
              </>
            ) : jobs.length ? (
              jobs.map(j => <JobCard key={j.id || j._id} job={{ roleTitle: j.title || j.roleTitle || j.name, company: j.company || j.sellerName || '—', location: j.location || j.city || '', posted: j.postedAt || j.createdAt || '—', summary: j.summary || j.description || '' }} />)
            ) : (
              <JobsTab />
            )
          ) : (
            <MusicTab />
          )}
        </div>
      </div>
    </div>
  )
}
