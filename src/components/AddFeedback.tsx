import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AddFeedback() {
  return (
    <div className='bg-white flex flex-col rounded-lg p-6 h-fit w-full'>
      <h1 className='text-dark-blue text-2xl font-bold'>Create New Feedback</h1>
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
        <p className='text-dark-blue text-sm font-bold'>Feedback Detail</p>
        <p className='text-dark-blue text-sm'>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea className='bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-32'></textarea>
      </div>
      <div className='flex flex-col-reverse md:flex-row md:justify-end mt-10'>
        <Link to={'/'}>
          <div className='rounded-xl p-2 mt-3 md:mt-0 md:px-6 bg-dark-blue w-content flex items-center justify-center hover:bg-light-blue cursor-pointer'>
            <p className='text-white font-bold text-sm'>Cancel</p>
          </div>
        </Link>
        <div className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-content md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
          <p className='text-white font-bold text-sm'>Add Feedback</p>
        </div>
      </div>
    </div>
  )
}

export default AddFeedback
