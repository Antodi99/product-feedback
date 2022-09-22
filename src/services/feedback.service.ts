import { getAccessToken } from './auth.service'
import axios from 'axios'
import { BACKEND_API_URL } from '../config'

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
    // const commentsRequests = resp.data.map(({ id }: any) =>
    //   axios.get(`${BACKEND_API_URL}/api/comments/?feedbackId=${id}`, {
    //     headers: {
    //       authorization: `Bearer ${getAccessToken()}`,
    //     },
    //   })
    // )
    // const commentsList = await Promise.all(commentsRequests)

    // resp.data.forEach(
    //   (feedback: any, index: any) =>
    //     ((feedback as any).comments = commentsList[index])
    // )

    console.log(resp.data)
    return resp.data as FeedbackWithComments[]
  } catch (error) {
    console.error(error)
    return []
  }
}
