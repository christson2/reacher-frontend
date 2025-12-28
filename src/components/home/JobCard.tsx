import React from 'react'

export default function JobCard({ job }: any){
  return (
    <div className="bg-white rounded-lg p-4 shadow mb-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-sky-700">{job.roleTitle}</div>
          <div className="text-xs text-gray-500">{job.company} • {job.location}</div>
        </div>
        <div className="text-sm text-gray-600">{job.posted}</div>
      </div>
      <div className="mt-3 text-gray-700">{job.summary}</div>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-2 bg-blue-600 text-white rounded">Apply</button>
        <button className="px-3 py-2 border rounded">Save</button>
      </div>
    </div>
  )
}
