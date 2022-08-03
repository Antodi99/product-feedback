import React from 'react'
import { FaGithub } from 'react-icons/fa'
function LoginPage() {
  return (
    <div className='bg-white flex flex-col items-center rounded-lg p-6 h-fit w-full hover:cursor-pointer mb-8'>
      <div className='text-xl font-bold mt-4'>Welcome To Product Feedback App!</div>
      <button className='mt-8 rounded-xl w-full p-2 md:p-3 bg-black flex items-center justify-center hover:bg-neutral-700 cursor-pointer'>
        <FaGithub className='text-white text-3xl' />
        <p className='text-white font-semibold ml-2'>Login with GitHub</p>
      </button>
    </div>
  )
}

export default LoginPage
