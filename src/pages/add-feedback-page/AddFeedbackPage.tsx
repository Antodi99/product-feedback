import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AddFeedback } from './components'

export function AddFeedbackPage() {
  const navigate = useNavigate()
  return (
    <div className='w-4/5 lg:w-4/12 flex flex-col justify-center pt-7 md:pt-20 m-auto lg:px-12 pb-7'>
      <div className='flex justify-between items-center'>
        <div
          className='flex items-center hover:underline cursor-pointer'
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft className='text-light-blue' />
          <p className='text-dark-blue font-bold text-sm ml-4'>Go Back</p>
        </div>
      </div>
      <main className='mt-8'>
        <AddFeedback />
      </main>
    </div>
  )
}
