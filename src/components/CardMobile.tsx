import React from 'react'
import { FaAngleUp, FaComment } from 'react-icons/fa'

function Cardmobile () {
  return (
    <div className='bg-white flex justify-between py-5 px-6 h-40 w-full hover:cursor-pointer flex-col text-sm'>
      <div className='flex'>
        <div className='h-full flex justify-between flex-col'>
        <p className='text-light-blue font-bold'>Add tags or solution</p>
        <p className='text-dark-blue text-sm'>Easier to search for solutions based on a specific stack.</p>
        <div className='bg-light-grey flex justify-center w-28 h-7 items-center rounded-lg hover:bg-light-grey-hov mt-2'>
        <p className='text-light-blue font-bold text-sm'>Enhancement</p>
        </div>
        </div>
        </div>

        <div className='flex justify-between'>
        <div className='w-16 h-7 bg-light-grey flex items-center rounded-lg hover:bg-light-grey-hov justify-around mt-2'>
        <FaAngleUp className='text-light-blue'/>
        <p className='text-dark-blue font-bold text-xs'>112</p>
        </div>
        <div className='flex items-center'>
        <FaComment className="text-2xl text-light-grey"/>
        <p className='ml-3 font-bold text-lg'>2</p>
        </div>
        </div>
        </div>
  )
}

export default Cardmobile
