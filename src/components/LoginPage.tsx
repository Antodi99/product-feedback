import React from 'react'
import { FaGithub } from 'react-icons/fa'
function LoginPage() {
  return (
    <div className='bg-white flex flex-col rounded-lg justify-between p-6 h-fit w-full hover:cursor-pointer mb-8'>
      <div className=''>
        <p className='my-4 font-bold text-lg'>User Name</p>
        <input className='pl-4 outline-none bg-light-grey rounded-lg h-10 w-full'></input>
      </div>
      <div className=''>
        <p className='my-4 font-bold text-lg'>Password</p>
        <input
          type={'password'}
          className='pl-4 outline-none bg-light-grey rounded-lg h-10 w-full'
        />
      </div>
      <button className='mt-4 rounded-xl w-full p-2 md:p-3 bg-black flex items-center justify-center hover:bg-neutral-700 cursor-pointer'>
        <FaGithub className='text-white text-3xl' />
        <p className='text-white font-semibold ml-2'>Login with GitHub</p>
      </button>
    </div>
  )
}

export default LoginPage
