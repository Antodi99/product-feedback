import { useState } from 'react'
import { FaVoteYea } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MenuDropdown } from './MenuDropdown'

function ManageBar() {
  const [selected, setSelected] = useState('Most Upvotes')
  return (
    <div className='bg-dark-blue md:rounded-lg p-4 flex items-center justify-between text-xs md:text-sm'>
      <div className='flex items-center w-4/5'>
        <FaVoteYea className='text-white text-xl hidden md:inline-block' />
        <h1 className='text-base font-bold md:ml-3 lg:ml-3 text-white hidden md:inline-block'>
          6 Suggestions
        </h1>
        <MenuDropdown selected={selected} setSelected={setSelected} />
      </div>
      <Link to={'/feedback/add'} className='w-32'>
        <div className='rounded-xl p-2 md:p-3 bg-fuchsia-500 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
          <p className='text-white font-bold text-xs'>+ Add Feedback</p>
        </div>
      </Link>
    </div>
  )
}

export default ManageBar
