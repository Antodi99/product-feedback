import clsx from 'clsx'
import { FaAngleUp, FaComment } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { Feedback, FeedbackStatus } from '../services/feedback.service'
import { Category } from './Header'

type FeedBackCardProps = {
  status: FeedbackStatus
  feedback: Feedback
  comments: number
  votes: number
  handleToggleVote: () => Promise<void>
  isVoted: boolean
}

const colorsByStatus: Record<FeedbackStatus, string> = {
  idea: 'amber-500',
  defined: 'purple-600',
  'in-progress': 'cyan-500',
  done: 'green-500',
}

export function FeedBackCard({
  feedback,
  votes,
  handleToggleVote,
  isVoted,
  comments,
  status,
}: FeedBackCardProps) {
  const voteColor = isVoted ? 'bg-light-blue' : 'bg-light-grey'
  const voteFontColor = isVoted ? 'text-white' : 'text-light-blue'
  const voteAngleColor = isVoted ? 'text-white' : 'text-dark-blue'

  const navigate = useNavigate()

  return (
    <div className='relative'>
      <div
        onClick={handleToggleVote}
        className={`absolute cursor-pointer select-none flex mt-44 ml-10 order-2 w-16 h-8 ${voteColor} flex-wrap p-2 justify-between items-center rounded-lg`}
      >
        <FaAngleUp className={`${voteFontColor}`} />
        <p className={`${voteAngleColor} font-bold text-xs md:text-sm`}>
          {votes}
        </p>
      </div>
      <div
        className='bg-white flex flex-col rounded-lg justify-between h-52 w-96 my-4 ml-4 min-w-[20rem] hover:cursor-pointer'
        onClick={() => navigate(`/feedback/${feedback.id}`)}
      >
        <Link
          to={`/feedback/${feedback.id}`}
          className='w-full flex order-1 h-full'
        >
          <div
            className={`w-96 h-1.5 bg-${colorsByStatus[status]} rounded-t-lg absolute`}
          ></div>
          <div className='flex w-full grow order-1 flex-col p-6'>
            <div className='flex items-center'>
              <div
                className={`rounded-xl w-2 h-2 bg-${colorsByStatus[status]}`}
              ></div>
              <p className='text-dark-blue ml-3 capitalize'>{status}</p>
            </div>
            <p className='text-dark-blue font-bold text-lg mt-4'>
              {feedback.title}
            </p>
            <p className='text-dark-blue text-sm mt-1'>{feedback.body}</p>
            <div
              className={clsx(
                'bg-light-grey flex justify-center w-fit py-1 px-4 mt-2 items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm capitalize',
                (feedback.category === Category.UI ||
                  feedback.category === Category.UX) &&
                  '!uppercase'
              )}
            >
              {feedback.category}
            </div>
          </div>
          <div className='flex items-center order-3 pr-4'>
            <FaComment className='text-xl text-light-grey-hov' />
            <p className='ml-3 font-bold'>{comments}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
