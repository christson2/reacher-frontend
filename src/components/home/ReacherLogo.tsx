import React from 'react'

export default function ReacherLogo({className}: {className?: string}){
  return (
    <div className={(className||"") + " flex items-center gap-2"}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-white font-bold">R</div>
      <div className="text-sky-700 font-semibold">Reacher</div>
    </div>
  )
}
