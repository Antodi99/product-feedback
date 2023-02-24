import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'

export type Vote = {
  createdAt: string
  feedbackId: number
  id: number
  updatedAt: string
  userId: number
}

export async function getAllVotesByFeedbackId(
  feedbackIds: number[]
): Promise<Vote[]> {
  try {
    const resp = await axios.get(
      `${BACKEND_API_URL}/api/votes/?feedbackId=${feedbackIds.join()}`,
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )
    return resp.data as Vote[]
  } catch (error) {
    return []
  }
}

export async function toggleVote(feedbackId: number) {
  try {
    await axios.post(
      `${BACKEND_API_URL}/api/votes/toggle`,
      {
        feedbackId,
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
