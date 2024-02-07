"use client"

import DropZone from '@/components/DropZone'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 items-start justify-between'>
      <span>
        <h1 className="text-5xl font-bold tracking-tighter">Welcome to your dashboard</h1>
        <p>Browse around and enjoy🧁</p>
      </span>
      <div className='cursor-pointer p-3 border-dashed border-4 border-slate-300'>
        <DropZone/>
      </div>
      <div>
          <button className='p-2 bg-slate-300 text-black mt-5 rounded shadow-lg active:translate-y-2 transition-transform'>Submit Files</button>
      </div>
    </div>
  )
}

export default Dashboard