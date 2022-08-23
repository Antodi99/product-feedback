import React from 'react'
import { FaGithub } from 'react-icons/fa'

function LoginMenu() {
  return (
    <div className='bg-white flex flex-col items-center justify-center rounded-xl p-6 h-40 md:h-52 w-80 md:w-[30rem] mb-8 drop-shadow-xl'>
      <p className='text-base md:text-xl font-bold mt-4'>
        Welcome To Product Feedback App!
      </p>
      <a
        href='https://go-product-feedback.herokuapp.com/api/auth/github'
        className='mt-4 md:mt-8 rounded-xl w-full p-2 md:p-3 bg-black flex items-center justify-center hover:bg-neutral-700 cursor-pointer'
      >
        <FaGithub className='text-white text-3xl' />
        <p className='text-sm md:text-base text-white font-semibold ml-2'>
          Login with GitHub
        </p>
      </a>
    </div>
  )
}

export default LoginMenu
