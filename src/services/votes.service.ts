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
  feedbackId: string
): Promise<Vote[]> {
  try {
    const resp = await axios.get(
      `${BACKEND_API_URL}/api/votes/?feedbackId=${feedbackId}`,
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )
    console.log(resp.data)
    return resp.data as Vote[]
  } catch (error) {
    return []
  }
}
