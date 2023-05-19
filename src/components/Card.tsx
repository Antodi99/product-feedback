import clsx from 'clsx'
import { FaAngleUp, FaComment } from 'react-icons/fa'
import { Feedback } from '../services/feedback.service'
import { Category } from './Header'

type CardProps = {
  feedback: Feedback
  comments: number
  votes: number
  handleToggleVote: () => Promise<void>
  isVoted: boolean
}

export function Card({
  feedback,
  votes,
  handleToggleVote,
  isVoted,
  comments,
}: CardProps) {
  const voteColor = isVoted ? 'bg-light-blue' : 'bg-light-grey'
  const voteFontColor = isVoted ? 'text-white' : 'text-light-blue'
  const voteAngleColor = isVoted ? 'text-white' : 'text-dark-blue'

  return (
    <div className='bg-white flex rounded-lg p-6 h-44 md:h-36 w-full flex-wrap md:flex-nowrap mt-5'>
      <div
        onClick={handleToggleVote}
        data-testid='vote'
        className={`flex cursor-pointer select-none mt-4 md:mt-0 order-2 md:order-1 w-16 md:w-10 h-8 md:h-14 ${voteColor} flex-wrap md:flex-nowrap md:flex-col p-2 justify-between md:justify-center items-center rounded-lg`}
      >
        <FaAngleUp className={`${voteFontColor}`} />
        <p className={`${voteAngleColor} font-bold text-xs md:text-sm`}>
          {votes}
        </p>
      </div>
      <div className='w-full flex order-1 md:order-2'>
        <div className='flex w-full grow justify-between flex-col md:ml-5'>
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

        <div className='flex items-center mt-4 md:mt-0'>
          <FaComment className='text-2xl text-light-grey' />
          <p className='ml-3 font-bold text-sm md:text-lg'>{comments}</p>
        </div>
      </div>
    </div>
  )
}
