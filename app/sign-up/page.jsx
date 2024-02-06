"use client"
import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <>
    <div className='mb-20'>
        <h1 className="text-5xl font-bold tracking-tighter">Welcome to the SignUp</h1>
        <p>Browse around and enjoy🧁</p>
    </div>
    <SignUp/>
    </>
  )
}

export default SignUpPage