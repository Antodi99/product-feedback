import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'
import { getAllCommentsByFeedbackId } from './comments.service'
import { getAllVotesByFeedbackId, Vote } from './votes.service'

export type Feedback = {
  id: number
  title: string
  body: string
  commentsCount: number
  category: string
  votesCount: number
}

type Comment = {
  body: string
  createdAt: string
  feedbackId: number
  id: number
  parentId: number
  updatedAt: string
  userId: number
}

type FeedbackWithComments = Feedback & {
  comments: Comment[]
}

export async function getAllFeedback(): Promise<FeedbackWithComments[]> {
  try {
    const resp = await axios.get<Feedback[]>(
      `${BACKEND_API_URL}/api/feedback/`,
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )

    const feedbackArr = resp.data
    const feedbackIds: number[] = []
    feedbackArr.forEach((obj) => {
      feedbackIds.push(obj.id)
    })
    const ids = feedbackIds.join()

    const feedbackCommentsVotes = await Promise.all([
      getAllCommentsByFeedbackId(ids),
      getAllVotesByFeedbackId(ids),
    ])

    const commentsList = feedbackCommentsVotes[0]
    const commentsObj: Record<number, Comment[]> = {}
    for (const comment of commentsList) {
      if (!commentsObj[comment.feedbackId]) {
        commentsObj[comment.feedbackId] = [comment]
      } else {
        commentsObj[comment.feedbackId].push(comment)
      }
    }

    const votesList = feedbackCommentsVotes[1]
    const votesObj: Record<number, Vote[]> = {}
    for (const vote of votesList) {
      if (!votesObj[vote.feedbackId]) {
        votesObj[vote.feedbackId] = [vote]
      } else {
        votesObj[vote.feedbackId].push(vote)
      }
    }

    for (let i = 0; i < resp.data.length; i++) {
      const feedback = resp.data[i]
      feedback.commentsCount = commentsObj[feedback.id]?.length || 0
      feedback.votesCount = votesObj[feedback.id]?.length || 0
    }

    return resp.data as FeedbackWithComments[]
  } catch (error) {
    console.error(error)
    return []
  }
}
