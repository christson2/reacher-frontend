import React from 'react'

export default function SkeletonCard(){
  return (
    <div className="animate-pulse bg-white rounded-lg p-4 shadow mb-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div className="h-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}
