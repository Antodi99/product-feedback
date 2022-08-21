import { AiOutlineFileSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function NoFeedback() {
  return (
    <div className='bg-white flex flex-col rounded-lg px-16 md:px-60 lg:px-48 h-[30rem] w-full justify-center items-center mt-5'>
      <AiOutlineFileSearch className='text-8xl text-dark-grey' />
      <div className='flex justify-center text-center flex-col mt-8 max-w-3/5'>
        <h1 className='text-dark-blue text-lg font-bold'>
          There is no feedback yet.
        </h1>
        <p className='text-dark-blue text-sm mt-4'>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <Link to={'/feedback/add'}>
        <div className='rounded-xl p-3 bg-fuchsia-500 w-fit flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer mt-6'>
          <p className='text-white font-bold text-xs'>+ Add Feedback</p>
        </div>
      </Link>
    </div>
  )
}

export default NoFeedback
