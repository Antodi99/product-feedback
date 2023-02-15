import { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { AddComment, Card, Comment } from '../components'
import { Feedback, getFeedbackById } from '../services/feedback.service'
import {
  Comment as TComment,
  getAllCommentsByFeedbackId,
} from '../services/comments.service'
import { getAllUsersById, User } from '../services/user.service'
import { groupBy } from 'lodash'
import { getAllVotesByFeedbackId, Vote } from '../services/votes.service'

export function FeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback | undefined>()
  const [comments, setComments] = useState<TComment[] | undefined>()
  const [votes, setVotes] = useState<Vote[] | undefined>()
  const [users, setUsers] = useState<Record<number, User[]> | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    fetchDataByFeedbackId(id).then(async (data) => {
      const users = await getUsersByComments(data[1] || [])
      setFeedback(data[0])
      setComments(data[1])
      setVotes(data[2])
      setUsers(users)
      setIsLoading(false)
    })
  }, [])

  const refreshComments = async () => {
    const comments = await getAllCommentsByFeedbackId([Number(id)])
    setComments(comments)
  }

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
              comment={comments?.length || 0}
              category={feedback.category}
              vote={votes?.length || 0}
            ></Card>

            {comments?.length &&
              comments?.map((comment) => {
                const user = users![comment.userId][0]
                return (
                  <Comment
                    key={comment.id}
                    name={user.name}
                    userName={user.user_name}
                    body={comment.body}
                    avatar={user.avatar_url}
                  ></Comment>
                )
              })}
            <AddComment
              id={String(feedback.id)}
              refreshComments={refreshComments}
            ></AddComment>
          </>
        )}
      </main>
    </div>
  )
}

async function getUsersByComments(comments: TComment[]) {
  if (comments.length === 0) {
    return []
  }

  const userIds = new Set<number>()
  for (const comment of comments) {
    userIds.add(comment.userId)
  }

  const user = await getAllUsersById([...userIds])
  return groupBy(user, 'id') as Record<string, User[]>
}

async function fetchDataByFeedbackId(id?: string) {
  const resp = await Promise.all([
    getFeedbackById(id),
    getAllCommentsByFeedbackId([Number(id)]),
    getAllVotesByFeedbackId([Number(id)]),
  ])
  return resp
}
