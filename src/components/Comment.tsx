import React from 'react'
import Avatar from '../assets/images/users/image-roxanne.jpg'

function Comment() {
  return (
    <div className='bg-white flex rounded-lg p-6 h-fit w-full mb-8'>
      <img src={Avatar} className='w-12 h-12 rounded-3xl'></img>
      <div className='w-full ml-4'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <p className='text-dark-blue font-bold'>Roxanne Travis</p>
            <p className='text-dark-blue'>@peppersprime32</p>
          </div>
          <p className='text-light-blue font-bold'>Reply</p>
        </div>
        <div>
          <p className='text-dark-blue text-lg mt-6'>
            I had learnt 5min python lesson. IT&apos;S AWESOME!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
