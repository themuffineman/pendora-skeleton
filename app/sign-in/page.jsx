"use client"
import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <>
      <div className='mb-20'>
          <h1 className="text-5xl font-bold tracking-tighter">Welcome to the SignIn</h1>
          <p>Browse around and enjoy🧁</p>
      </div>
      <SignIn/>
    </>
  )
}

export default SignInPage