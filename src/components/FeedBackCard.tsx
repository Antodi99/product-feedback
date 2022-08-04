import React from 'react'
import { FaAngleUp, FaComment } from 'react-icons/fa'

function FeedBackCard() {
  return (
    <div className='bg-white flex flex-col rounded-lg justify-between h-fit w-full hover:cursor-pointer mb-8'>
      <div className='w-full h-1.5 bg-purple-600 rounded-t-lg'></div>
      <div className='flex w-full grow md:order-2 order-1 flex-col p-6'>
        <div className='flex items-center'>
          <div className='rounded-xl w-2 h-2 bg-purple-600'></div>
          <p className='text-dark-blue ml-3'>In-Progress</p>
        </div>
        <p className='text-dark-blue font-bold text-lg mt-4'>More reports</p>
        <p className='text-dark-blue text-sm mt-1'>Add pls</p>
        <div className='bg-light-grey flex justify-center mt-2 w-fit py-1 px-4  items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm'>
          Future
        </div>
        <div className='flex justify-between mt-4'>
          <div className='flex md:order-1 w-16 h-8 bg-light-grey flex-wrap md:flex-nowrap p-2 justify-between items-center rounded-lg hover:bg-light-grey-hov'>
            <FaAngleUp className='text-light-blue' />
            <p className='text-dark-blue font-bold text-xs md:text-sm'>123</p>
          </div>
          <div className='flex items-center order-3'>
            <FaComment className='text-xl text-light-grey-hov' />
            <p className='ml-3 font-bold'>2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard
