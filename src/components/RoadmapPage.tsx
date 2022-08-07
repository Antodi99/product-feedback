import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import FeedBackCard from './FeedBackCard'

function RoadmapPage() {
  return (
    <div className='w-4/5 lg:w-7/12 flex flex-col justify-center pt-7 md:pt-20 m-auto lg:p-12 pb-7'>
      <div className='flex justify-between items-center bg-dark-blue h-28 px-4 rounded-xl'>
        <div className=''>
          <div className='flex items-center hover:underline cursor-pointer'>
            <FaAngleLeft className='text-white text-sm' />
            <p className='text-white font-bold text-xs ml-3'>
              <Link to={'/'}>Go Back</Link>
            </p>
          </div>
          <h1 className='mt-2 text-2xl text-white font-bold'>Roadmap</h1>
        </div>
        <div className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-content md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
          <p className='text-white font-bold text-sm'>+ Add Feedback</p>
        </div>
      </div>
      <main className='flex flex-row'>
        <div className='w-1/3 flex flex-col'>
          <div className='my-8'>
            <h1 className='font-bold text-dark-blue text-lg'>Planned (2)</h1>
            <p className='text-dark-grey text-sm'>
              Ideas prioritized for research
            </p>
          </div>
          <FeedBackCard />
          <FeedBackCard />
        </div>
        <div className='w-1/3 mx-2 lg:mx-6'>
          <div className='my-8'>
            <h1 className='font-bold text-dark-blue text-lg'>
              In-Progress (3)
            </h1>
            <p className='text-dark-grey text-sm'>Currently being developed</p>
          </div>
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </div>
        <div className='w-1/3'>
          <div className='my-8'>
            <h1 className='font-bold text-dark-blue text-lg'>Live (1)</h1>
            <p className='text-dark-grey text-sm'>Released features</p>
          </div>
          <FeedBackCard />
        </div>
      </main>
    </div>
  )
}

export default RoadmapPage
