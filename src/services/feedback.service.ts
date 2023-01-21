import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'
import { getAllCommentsByFeedbackId, Comment } from './comments.service'
import { getAllVotesByFeedbackId, Vote } from './votes.service'

export type FeedbackStatus = 'idea' | 'defined' | 'in-progress' | 'done'

export type Feedback = {
  id: number
  title: string
  body: string
  commentsCount: number
  category: string
  votesCount: number
  status: FeedbackStatus
}

export async function getAllFeedback(): Promise<Feedback[]> {
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

    const [commentsList, votesList] = await Promise.all([
      getAllCommentsByFeedbackId(feedbackIds),
      getAllVotesByFeedbackId(feedbackIds),
    ])

    const commentsObj: Record<number, Comment[]> = {}
    for (const comment of commentsList) {
      if (!commentsObj[comment.feedbackId]) {
        commentsObj[comment.feedbackId] = [comment]
      } else {
        commentsObj[comment.feedbackId].push(comment)
      }
    }

    const votesObj: Record<number, Vote[]> = {}
    for (const vote of votesList) {
      if (!votesObj[vote.feedbackId]) {
        votesObj[vote.feedbackId] = [vote]
      } else {
        votesObj[vote.feedbackId].push(vote)
      }
    }

    for (let i = 0; i < feedbackArr.length; i++) {
      const feedback = feedbackArr[i]
      feedback.commentsCount = commentsObj[feedback.id]?.length || 0
      feedback.votesCount = votesObj[feedback.id]?.length || 0
    }

    return feedbackArr as Feedback[]
  } catch (error) {
    console.error(error)
    return []
  }
}
