import { groupBy } from 'lodash'
import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FeedBackCard } from '../components'
import {
  getAllCommentsByFeedbackId,
  Comment,
} from '../services/comments.service'
import { Feedback, getAllFeedback } from '../services/feedback.service'
import { User } from '../services/user.service'
import {
  getAllVotesByFeedbackId,
  toggleVote,
  Vote,
} from '../services/votes.service'

type RoadmapPageProps = {
  user?: User
}

export function RoadmapPage({ user }: RoadmapPageProps) {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [votes, setVotes] = useState<Vote[]>([])
  const [, setIsLoading] = useState(true)

  const groupedVotesByFeedbackId = groupBy(votes, 'feedbackId')
  const groupedCommentsByFeedbackId = groupBy(comments, 'feedbackId')
  const groupedFeedbacksByStatus = groupBy(feedbackList, 'status')

  const refreshVotes = async () => {
    const feedbackIds = getFeedbackIds(feedbackList)
    const votes = await getAllVotesByFeedbackId(feedbackIds)
    setVotes(votes)
  }

  const handleToggleVote = async (feedbackId: number) => {
    await toggleVote(feedbackId)
    refreshVotes()
  }

  useEffect(() => {
    getAllFeedback().then(async (feedbackList) => {
      const feedbackIds = getFeedbackIds(feedbackList)
      const [comments, votes] = await Promise.all([
        getAllCommentsByFeedbackId(feedbackIds),
        getAllVotesByFeedbackId(feedbackIds),
      ])
      setComments(comments)
      setVotes(votes)
      setFeedbackList(feedbackList)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='w-4/5 lg:w-7/12 flex flex-col justify-center pt-7 md:pt-20 m-auto lg:px-12 pb-7'>
      <div className='flex justify-between items-center bg-dark-blue h-28 px-4 rounded-xl'>
        <div className=''>
          <Link to={'/'}>
            <div className='flex items-center hover:underline cursor-pointer'>
              <FaAngleLeft className='text-white text-sm' />
              <p className='text-white font-bold text-xs ml-3'>Go Back</p>
            </div>
          </Link>
          <h1 className='mt-2 text-2xl text-white font-bold'>Roadmap</h1>
        </div>
        <Link to={'/feedback/add'}>
          <div className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-content md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
            <p className='text-white font-bold text-sm'>+ Add Feedback</p>
          </div>
        </Link>
      </div>
      <main className='flex md:flex-row md:overflow-auto flex-col'>
        <div className='w-full min-w-[27rem] flex flex-col'>
          <div className='my-8 mx-4'>
            <h1 className='font-bold text-dark-blue text-lg'>
              Ideas ({groupedFeedbacksByStatus.idea?.length || 0})
            </h1>
            <p className='text-dark-grey text-sm'>
              Ideas prioritized for research
            </p>
          </div>
          <div className='flex md:flex-col flex-row overflow-y-auto w-full md:h-[32rem]'>
            {groupedFeedbacksByStatus.idea?.length > 0 &&
              groupedFeedbacksByStatus.idea.map((feedback) => (
                <FeedBackCard
                  key={feedback.id}
                  status={feedback.status}
                  feedback={feedback}
                  comments={
                    groupedCommentsByFeedbackId[feedback.id]?.length || 0
                  }
                  votes={groupedVotesByFeedbackId[feedback.id]?.length || 0}
                  handleToggleVote={() => handleToggleVote(feedback.id)}
                  isVoted={Boolean(
                    groupedVotesByFeedbackId[feedback.id]?.find(
                      (vote) => vote.userId === user?.id
                    )
                  )}
                />
              ))}
          </div>
        </div>
        <div className='w-full min-w-[27rem] flex flex-col'>
          <div className='my-8 mx-4'>
            <h1 className='font-bold text-dark-blue text-lg'>
              Defined ({groupedFeedbacksByStatus.defined?.length || 0})
            </h1>
            <p className='text-dark-grey text-sm'>Defined features</p>
          </div>
          <div className='flex md:flex-col flex-row overflow-y-auto w-full md:h-[32rem]'>
            {groupedFeedbacksByStatus.defined?.length > 0 &&
              groupedFeedbacksByStatus.defined.map((feedback) => (
                <FeedBackCard
                  key={feedback.id}
                  status={feedback.status}
                  feedback={feedback}
                  comments={
                    groupedCommentsByFeedbackId[feedback.id]?.length || 0
                  }
                  votes={groupedVotesByFeedbackId[feedback.id]?.length || 0}
                  handleToggleVote={() => handleToggleVote(feedback.id)}
                  isVoted={Boolean(
                    groupedVotesByFeedbackId[feedback.id]?.find(
                      (vote) => vote.userId === user?.id
                    )
                  )}
                />
              ))}
          </div>
        </div>
        <div className='w-full min-w-[27rem] flex flex-col'>
          <div className='my-8 mx-4'>
            <h1 className='font-bold text-dark-blue text-lg'>
              In-Progress (
              {groupedFeedbacksByStatus['in-progress']?.length || 0})
            </h1>
            <p className='text-dark-grey text-sm'>Currently being developed</p>
          </div>
          <div className='flex md:flex-col flex-row overflow-y-auto w-full md:h-[32rem]'>
            {groupedFeedbacksByStatus['in-progress']?.length > 0 &&
              groupedFeedbacksByStatus['in-progress'].map((feedback) => (
                <FeedBackCard
                  key={feedback.id}
                  status={feedback.status}
                  feedback={feedback}
                  comments={
                    groupedCommentsByFeedbackId[feedback.id]?.length || 0
                  }
                  votes={groupedVotesByFeedbackId[feedback.id]?.length || 0}
                  handleToggleVote={() => handleToggleVote(feedback.id)}
                  isVoted={Boolean(
                    groupedVotesByFeedbackId[feedback.id]?.find(
                      (vote) => vote.userId === user?.id
                    )
                  )}
                />
              ))}
          </div>
        </div>
        <div className='w-full min-w-[27rem] flex flex-col'>
          <div className='my-8 mx-4'>
            <h1 className='font-bold text-dark-blue text-lg'>
              Done ({groupedFeedbacksByStatus.done?.length || 0})
            </h1>
            <p className='text-dark-grey text-sm'>Released features</p>
          </div>
          <div className='flex md:flex-col flex-row overflow-y-auto w-full md:h-[32rem]'>
            {groupedFeedbacksByStatus.done?.length > 0 &&
              groupedFeedbacksByStatus.done.map((feedback) => (
                <FeedBackCard
                  key={feedback.id}
                  status={feedback.status}
                  feedback={feedback}
                  comments={
                    groupedCommentsByFeedbackId[feedback.id]?.length || 0
                  }
                  votes={groupedVotesByFeedbackId[feedback.id]?.length || 0}
                  handleToggleVote={() => handleToggleVote(feedback.id)}
                  isVoted={Boolean(
                    groupedVotesByFeedbackId[feedback.id]?.find(
                      (vote) => vote.userId === user?.id
                    )
                  )}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function getFeedbackIds(feedbackList: Feedback[]) {
  const feedbackIds: number[] = []
  feedbackList.forEach((obj) => {
    feedbackIds.push(obj.id)
  })
  return feedbackIds
}
