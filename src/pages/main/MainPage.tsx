import { useEffect, useState } from 'react'
import { groupBy } from 'lodash'
import { Card, Header } from '../../components'
import ManageBar from '../../components/ManageBar'
import NoFeedback from '../../components/NoFeedback'
import {
  getAllCommentsByFeedbackId,
  Comment,
} from '../../services/comments.service'
import { Feedback, getAllFeedback } from '../../services/feedback.service'
import {
  getAllVotesByFeedbackId,
  toggleVote,
  Vote,
} from '../../services/votes.service'
import { filterByCategories, sortByVotesAndComments } from './utils'
import { User } from '../../services/user.service'

function getFeedbackIds(feedbackList: Feedback[]) {
  const feedbackIds: number[] = []
  feedbackList.forEach((obj) => {
    feedbackIds.push(obj.id)
  })
  return feedbackIds
}

type MainPageProps = {
  user?: User
}

export function MainPage({ user }: MainPageProps) {
  const [sortByFilter, setSortByFilter] = useState('Most Upvotes')
  const [filterByCategory, setFilterByCategory] = useState('all')
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [votes, setVotes] = useState<Vote[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const groupedVotesByFeedbackId = groupBy(votes, 'feedbackId')
  const groupedCommentsByFeedbackId = groupBy(comments, 'feedbackId')

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

  const refreshVotes = async () => {
    const feedbackIds = getFeedbackIds(feedbackList)
    const votes = await getAllVotesByFeedbackId(feedbackIds)
    setVotes(votes)
  }

  const handleToggleVote = async (feedbackId: number) => {
    await toggleVote(feedbackId)
    refreshVotes()
  }

  const filteredFeedbackList = feedbackList
    .filter(filterByCategories(filterByCategory))
    .sort(
      sortByVotesAndComments(
        sortByFilter,
        groupedCommentsByFeedbackId,
        groupedVotesByFeedbackId
      )
    )

  return (
    <div className='flex flex-col lg:flex-row min-h-screen w-full lg:justify-center md:p-11 lg:p-0 lg:pt-20'>
      <Header
        feedbackList={filteredFeedbackList}
        filterByCategory={filterByCategory}
        setFilterByCategory={setFilterByCategory}
      />
      <main className='flex flex-col md:mt-8 lg:mt-0 lg:ml-8 w-full lg:w-[45rem]'>
        <ManageBar
          suggestionsCount={filteredFeedbackList.length}
          sortByFilter={sortByFilter}
          setSortByFilter={setSortByFilter}
        />
        <div className='px-4 pb-4 md:px-0 md:pb-0'>
          {isLoading && 'Loading...'}
          {!filteredFeedbackList.length && !isLoading && <NoFeedback />}
          {filteredFeedbackList?.map((feedback) => (
            <Card
              key={feedback.id}
              feedback={feedback}
              votes={groupedVotesByFeedbackId[feedback.id]?.length || 0}
              comments={groupedCommentsByFeedbackId[feedback.id]?.length || 0}
              handleToggleVote={() => handleToggleVote(feedback.id)}
              isVoted={Boolean(
                groupedVotesByFeedbackId[feedback.id]?.find(
                  (vote) => vote.userId === user?.id
                )
              )}
            ></Card>
          ))}
        </div>
      </main>
    </div>
  )
}
