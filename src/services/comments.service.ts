import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'

export type Comment = {
  body: string
  createdAt: string
  feedbackId: number
  id: number
  parentId: number
  updatedAt: string
  userId: number
}

export async function getAllCommentsByFeedbackId(
  feedbackIds: number[]
): Promise<Comment[]> {
  try {
    const resp = await axios.get(
      `${BACKEND_API_URL}/api/comments/?feedbackId=${feedbackIds.join()}`,
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )
    return resp.data as Comment[]
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function createComment(text: string, id: number) {
  try {
    const resp = await axios.post(
      `${BACKEND_API_URL}/api/comments/`,
      {
        body: text,
        feedbackId: id,
      },
      {
        headers: {
          authorization: `Bearer ${getAccessToken()}`,
        },
      }
    )
    console.log(resp.data)
  } catch (error) {
    console.error(error)
  }
}
