import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

function EditFeedback() {
  return (
    <div className='bg-white flex flex-col rounded-lg p-6 h-fit w-full'>
      <h1 className='text-dark-blue text-2xl font-bold'>
        Editing &rsquo;Add Tags For Solutions&rsquo;
      </h1>
      <div className='mt-4'>
        <p className='text-dark-blue text-sm font-bold'>Feedback Title</p>
        <p className='text-dark-blue text-sm'>
          Add a short, descriptive headline
        </p>
        <input className='bg-light-grey p-2 w-full outline-none rounded-lg mt-4'></input>
      </div>
      <div className='mt-8'>
        <p className='text-dark-blue text-sm font-bold'>Category</p>
        <p className='text-dark-blue text-sm'>
          Choose a category for you feedback
        </p>
        <div className='bg-light-grey p-2 w-full outline-none rounded-lg mt-4 flex justify-between items-center text-light-blue hover:text-fuchsia-400 cursor-pointer'>
          <p className='ml-4'>UI</p>
          <FaAngleDown className='text-light-blue' />
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-dark-blue text-sm font-bold'>Update Status</p>
        <p className='text-dark-blue text-sm'>Change feedback state</p>
        <div className='bg-light-grey p-2 w-full outline-none rounded-lg mt-4 flex justify-between items-center text-light-blue hover:text-fuchsia-400 cursor-pointer'>
          <p className='ml-4'>Suggeston</p>
          <FaAngleDown className='text-light-blue' />
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-dark-blue text-sm font-bold'>Feedback Detail</p>
        <p className='text-dark-blue text-sm'>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea className='bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-32'></textarea>
      </div>
      <div className='flex flex-col-reverse md:flex-row md:justify-between mt-10'>
        <div className='rounded-xl p-2 mt-3 md:mt-0 md:px-6 bg-red-900 w-content flex items-center justify-center hover:bg-light-blue cursor-pointer'>
          <p className='text-white font-bold text-sm'>Delete</p>
        </div>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='rounded-xl p-2 md:p-3 mt-3 md:mt-0 md:px-6 bg-dark-blue w-content flex items-center justify-center hover:bg-light-blue cursor-pointer'>
            <p className='text-white font-bold text-sm'>Cancel</p>
          </div>
          <div className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-content md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
            <p className='text-white font-bold text-sm'>Save Changes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFeedback
