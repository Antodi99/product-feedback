import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'
import { Comment, getAllCommentsByFeedbackId } from './comments.service'
import { getAllVotesByFeedbackId, Vote } from './votes.service'
import toNumber from 'lodash/toNumber'

export type FeedbackStatus = 'idea' | 'defined' | 'in-progress' | 'done'

export type Feedback = {
  id: number
  title: string
  body: string
  comments: Comment[]
  category: string
  votes: Vote[]
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

    return resp.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getFeedbackById(
  id?: string
): Promise<Feedback | undefined> {
  if (id === undefined) {
    return undefined
  }

  const idNumber = toNumber(id)

  if (isNaN(idNumber)) {
    return undefined
  }

  try {
    const resp = await axios.get<Feedback>(
      `${BACKEND_API_URL}/api/feedback/${id}`,
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )

    return resp.data
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export async function addFeedback(
  feedbackDetail: string,
  feedbackTitle: string,
  selectedCategory: string
) {
  try {
    await axios.post(
      `${BACKEND_API_URL}/api/feedback/`,
      {
        title: feedbackTitle,
        body: feedbackDetail,
        category: selectedCategory.toLowerCase(),
      },
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )
  } catch (error) {
    console.error(error)
  }
}

export async function deleteFeedback(feedbackId: number) {
  try {
    await axios.delete(`${BACKEND_API_URL}/api/feedback/${feedbackId}`, {
      headers: {
        authorization: `Bearer ${getAccessToken()}`,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export async function updateFeedback(
  feedbackId: number,
  feedbackDetail: string,
  feedbackTitle: string,
  selectedStatus: string,
  selectedCategory: string
) {
  try {
    await axios.put(
      `${BACKEND_API_URL}/api/feedback/${feedbackId}`,
      {
        title: feedbackTitle,
        body: feedbackDetail,
        category: selectedCategory.toLowerCase(),
        status: selectedStatus.toLowerCase(),
      },
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )
  } catch (error) {
    console.error(error)
  }
}

export async function fetchDataByFeedbackId(id?: string) {
  const resp = await Promise.all([
    getFeedbackById(id),
    getAllCommentsByFeedbackId([Number(id)]),
    getAllVotesByFeedbackId([Number(id)]),
  ])
  return resp
}
