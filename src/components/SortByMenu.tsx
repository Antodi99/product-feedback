import { FaCheck } from 'react-icons/fa'

function SortByMenu() {
  return (
    <div className='bg-white flex rounded-lg h-fit w-full flex-col shadow-lg'>
      <div className='flex justify-between p-3 items-center'>
        <p className='text-dark-blue ml-2'>Most Upvotes</p>
        <FaCheck className='text-bg-fuchsia-500 mr-2 text-fuchsia-500' />
      </div>
      <div className='flex justify-between border-t-light-grey border-t-2 p-3 items-center'>
        <p className='text-dark-blue ml-2'>Least Upvotes</p>
      </div>
      <div className='flex justify-between border-t-light-grey border-t-2 p-3 items-center'>
        <p className='text-dark-blue ml-2'>Most Comments</p>
      </div>
      <div className='flex justify-between border-t-light-grey border-t-2 p-3 items-center'>
        <p className='text-dark-blue ml-2'>Least Comments</p>
      </div>
    </div>
  )
}

export default SortByMenu
