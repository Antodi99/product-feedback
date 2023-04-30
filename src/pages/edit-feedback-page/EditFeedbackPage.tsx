import { FaAngleLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { EditFeedback } from './components'

export function EditFeedbackPage() {
  const { id } = useParams()
  return (
    <div className='w-4/5 lg:w-4/12 flex flex-col justify-center pt-7 md:pt-20 m-auto lg:px-12 pb-7'>
      <div className='flex justify-between items-center'>
        <Link to={`/feedback/${id}`} replace>
          <div className='flex items-center hover:underline cursor-pointer'>
            <FaAngleLeft className='text-light-blue' />
            <p className='text-dark-blue font-bold text-sm ml-4'>Go Back</p>
          </div>
        </Link>
      </div>
      <main className='mt-8'>
        <EditFeedback />
      </main>
    </div>
  )
}
