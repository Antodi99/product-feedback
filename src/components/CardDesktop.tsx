import React from 'react'
import { FaAngleUp, FaComment } from 'react-icons/fa'

function Carddesktop () {
  return (
    <div className='bg-white flex justify-between py-7 px-8 h-40 w-full hover:cursor-pointer'>
      <div className='flex'>
        <div className='w-9 h-14 bg-light-grey flex flex-col justify-center items-center rounded-lg hover:bg-light-grey-hov'>
        <FaAngleUp className='text-light-blue'/>
        <p className='text-dark-blue font-bold text-sm'>112</p>
        </div>
        <div className='h-full flex justify-between flex-col ml-5'>
        <p className='text-light-blue font-bold'>Add tags or solution</p>
        <p className='text-dark-blue text-sm'>Easier to search for solutions based on a specific stack.</p>
        <div className='bg-light-grey flex justify-center w-32 h-8 items-center rounded-lg hover:bg-light-grey-hov'>
        <p className='text-light-blue font-bold text-sm'>Enhancement</p>
        </div>
        </div>
        </div>
        <div className='flex items-center'>
        <FaComment className="text-2xl text-light-grey"/>
        <p className='ml-3 font-bold text-lg'>2</p>
        </div>
        </div>
  )
}

export default Carddesktop
