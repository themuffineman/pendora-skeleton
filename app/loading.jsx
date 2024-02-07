"use client"
import React from 'react'

const loading = () => {
  return (
    <div className="absolute h-full w-full z-20 backdrop-blur-md bg-transparent flex items-center justify-center top-0 left-0">
        <span className="rounded-full w-10 h-10 border-4 border-black border-t-transparent animate-spin "/>
    </div>
  )
}

export default loading