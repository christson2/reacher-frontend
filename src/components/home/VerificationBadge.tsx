import React from 'react'

export default function VerificationBadge({ size = 14 }: { size?: number }){
  return (
    <span className="inline-flex items-center justify-center bg-white rounded-full" style={{width: size, height: size}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#06b6d4" className="w-full h-full">
        <path d="M12 2l2.09 4.24L19 8l-3 2.63L17.18 16 12 13.77 6.82 16 7 10.63 4 8l4.91-1.76L12 2z" />
      </svg>
    </span>
  )
}
