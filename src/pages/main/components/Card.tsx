import clsx from 'clsx'
import { FaAngleUp, FaComment } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Category } from '../../../components/Header'
import { Feedback } from '../../../services/feedback.service'
import { Vote } from '../../../services/votes.service'
import { Comment } from '../../../services/comments.service'

type CardProps = {
  feedback: Feedback
  handleToggleVote: () => Promise<void>
  isVoted: boolean
  votes: Vote[]
  comments: Comment[]
}

export function Card({
  feedback,
  isVoted,
  votes,
  comments,
  handleToggleVote,
}: CardProps) {
  const voteColor = isVoted ? 'bg-light-blue' : 'bg-light-grey'
  const voteFontColor = isVoted ? 'text-white' : 'text-light-blue'
  const voteAngleColor = isVoted ? 'text-white' : 'text-dark-blue'

  return (
    <div className='relative'>
      <div
        onClick={handleToggleVote}
        className={`absolute cursor-pointer select-none flex top-10 left-4 order-2 mt-4 md:mt-0 md:order-1 w-16 md:w-10 h-8 md:h-14 ${voteColor} flex-wrap md:flex-nowrap md:flex-col p-2 justify-between md:justify-center items-center rounded-lg`}
      >
        <FaAngleUp className={`${voteFontColor}`} />
        <p className={`${voteAngleColor} font-bold text-xs md:text-sm`}>
          {votes?.length || 0}
        </p>
      </div>
      <Link key={feedback.id} to={`/feedback/${feedback.id}`}>
        <div className='bg-white flex rounded-lg justify-between p-6 h-44 md:h-36 w-full flex-wrap md:flex-nowrap hover:cursor-pointer mt-5'>
          <div className='flex w-full grow justify-between md:order-2 order-1 flex-col md:ml-14'>
            <p className='text-light-blue font-bold text-sm md:text-base'>
              {feedback.title}
            </p>
            <p className='text-dark-blue text-sm'>{feedback.body}</p>
            <div
              className={clsx(
                'bg-light-grey flex justify-center w-fit py-1 px-4 mt-4 md:mt-0 items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm capitalize',
                (feedback.category === Category.UI ||
                  feedback.category === Category.UX) &&
                  '!uppercase'
              )}
            >
              {feedback.category}
            </div>
          </div>

          <div className='flex items-center order-3 mt-4 md:mt-0'>
            <FaComment className='text-2xl text-light-grey' />
            <p className='ml-3 font-bold text-sm md:text-lg'>
              {comments?.length}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
