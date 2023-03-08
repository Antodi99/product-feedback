import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'
import { Comment } from './comments.service'
import { Vote } from './votes.service'
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
