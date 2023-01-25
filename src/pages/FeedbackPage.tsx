import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { AddComment, Card, Comment } from '../components'
import { Feedback, getFeedbackById } from '../services/feedback.service'

export function FeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    getFeedbackById(id).then((feedback) => {
      setFeedback(feedback)
      setIsLoading(false)
    })
  }, [])

  console.log('feedback', feedback)

  return (
    <div className='w-4/5 lg:w-5/12 flex flex-col justify-center pt-7 md:pt-20 m-auto lg:px-12 pb-7'>
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
        {!feedback && isLoading && 'Loading...'}
        {!feedback && !isLoading && 'Not found'}
        {feedback && (
          <>
            <Card
              title={feedback.title}
              description={feedback.body}
              comment={feedback.comments.length}
              category={feedback.category}
              vote={feedback.votes.length}
            ></Card>
            <Comment name={''} userName={''} body={''}></Comment>
            <AddComment></AddComment>
          </>
        )}
      </main>
    </div>
  )
}
