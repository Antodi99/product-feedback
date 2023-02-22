import { Dictionary } from 'lodash'
import { Category } from '../../components'
import { Feedback } from '../../services/feedback.service'
import { Vote } from '../../services/votes.service'
import { Comment } from '../../services/comments.service'

export function sortByVotesAndComments(
  sortByFilter: string,
  commentsByFeedbackId: Dictionary<Comment[]>,
  votesByFeedbackId: Dictionary<Vote[]>
) {
  return (a: Feedback, b: Feedback) => {
    switch (sortByFilter) {
      case 'Most Upvotes':
        return (
          (votesByFeedbackId[b.id]?.length || 0) -
          (votesByFeedbackId[a.id]?.length || 0)
        )
      case 'Least Upvotes':
        return (
          (votesByFeedbackId[a.id]?.length || 0) -
          (votesByFeedbackId[b.id]?.length || 0)
        )
      case 'Most Comments':
        return (
          (commentsByFeedbackId[b.id]?.length || 0) -
          (commentsByFeedbackId[a.id]?.length || 0)
        )
      case 'Least Comments':
        return (
          (commentsByFeedbackId[a.id]?.length || 0) -
          (commentsByFeedbackId[b.id]?.length || 0)
        )
      default:
        return a.id - b.id
    }
  }
}

export function filterByCategories(activeCategory: string) {
  return (feedback: Feedback) => {
    switch (activeCategory) {
      case Category.UI:
        return feedback.category === Category.UI
      case Category.UX:
        return feedback.category === Category.UX
      case Category.Enhancement:
        return feedback.category === Category.Enhancement
      case Category.Defect:
        return feedback.category === Category.Defect
      case Category.Feature:
        return feedback.category === Category.Feature
      default:
        return true
    }
  }
}
