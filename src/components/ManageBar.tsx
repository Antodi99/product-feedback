import React from 'react'
import { FaVoteYea, FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ManageBar() {
  return (
    <div className='bg-dark-blue md:rounded-lg p-4 flex items-center justify-between text-xs md:text-sm'>
      <div className='flex items-center w-4/5'>
        <FaVoteYea className='text-white text-3xl hidden md:inline-block' />
        <h1 className='text-lg font-bold md:ml-3 lg:ml-9 text-white hidden md:inline-block'>
          6 Suggestions
        </h1>
        <button className='flex md:ml-3 lg:ml-9 text-white hover:text-dark-grey'>
          <p className=''>Sort By :</p>
          <div className='ml-2 lg:ml-4 flex font-bold items-center'>
            <p className=''>Most Upvotes</p>
            <FaAngleDown className='ml-2 md:ml-4 ' />
          </div>
        </button>
      </div>
      <Link to={'/feedback/add'}>
        <div className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-36 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
          <p className='text-white font-bold text-xs md:text-sm'>
            + Add Feedback
          </p>
        </div>
      </Link>
    </div>
  )
}

export default ManageBar
