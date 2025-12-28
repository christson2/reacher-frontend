import React from 'react'

export default function FriendPost({ post }: any){
  return (
    <div className="bg-white rounded-lg p-3 shadow mb-4">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-xs text-gray-500">{post.time}</div>
            </div>
          </div>
          <div className="mt-2 text-gray-700">{post.text}</div>

          {/* Image media (lazy loaded) */}
          {post.image && (
            // Use native lazy loading for simplicity
            // replace with next/image if you prefer optimized images
            <img src={post.image} alt="media" loading="lazy" className="mt-2 rounded max-h-48 w-full object-cover" />
          )}

          {/* Video media: show poster if provided, else a placeholder with play button */}
          {post.video && (
            <div className="mt-2 rounded overflow-hidden bg-black">
              {post.videoPoster ? (
                <img src={post.videoPoster} alt="video poster" loading="lazy" className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 flex items-center justify-center text-white">Video</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
