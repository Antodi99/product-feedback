import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AddComment from './AddComment'
import { Card } from './Card'
import Comment from './Comment'

function FeedbackPage() {
  return (
    <div className='w-4/5 lg:w-5/12 flex flex-col justify-center pt-7 md:pt-20 m-auto lg:p-12 pb-7 md:mt-8'>
      <div className='flex justify-between items-center'>
        <Link to={'/'}>
          <div className='flex items-center hover:underline cursor-pointer'>
            <FaAngleLeft className='text-light-blue' />
            <p className='text-dark-blue font-bold text-sm ml-4'>Go Back</p>
          </div>
        </Link>
        <Link to={'/feedback/:id/edit'}>
          <div className='rounded-xl p-2 md:px-6 bg-light-blue w-content flex items-center justify-center hover:bg-light-blue cursor-pointer'>
            <p className='text-white font-bold text-sm'>Edit Feedback</p>
          </div>
        </Link>
      </div>
      <main className=''>
        <Card
          title={''}
          description={''}
          comment={0}
          category={''}
          vote={0}
        ></Card>
        <Comment></Comment>
        <AddComment></AddComment>
      </main>
    </div>
  )
}

export default FeedbackPage
