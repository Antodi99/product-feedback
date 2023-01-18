import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Category, Header } from '../components'
import ManageBar from '../components/ManageBar'
import NoFeedback from '../components/NoFeedback'
import { Feedback, getAllFeedback } from '../services/feedback.service'

// const feedbackList: Feedback[] = [
//   {
//     id: 1,
//     title: 'test title',
//     description: 'some description',
//     commentsCount: 3,
//     category: 'feature',
//     votesCount: 34,
//   },
//   {
//     id: 2,
//     title: 'test title',
//     description: 'some description',
//     commentsCount: 3,
//     category: 'enhancement',
//     votesCount: 36,
//   },
//   {
//     id: 3,
//     title: 'test title',
//     description: 'some description',
//     commentsCount: 2,
//     category: 'ui',
//     votesCount: 35,
//   },
// ]

function sortByVotesAndComments(sortByFilter: string) {
  return (a: Feedback, b: Feedback) => {
    switch (sortByFilter) {
      case 'Most Upvotes':
        return b.votesCount - a.votesCount
      case 'Least Upvotes':
        return a.votesCount - b.votesCount
      case 'Most Comments':
        return b.commentsCount - a.commentsCount
      case 'Least Comments':
        return a.commentsCount - b.commentsCount
      default:
        return a.id - b.id
    }
  }
}

function filterByCategories(activeCategory: string) {
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

export function MainPage() {
  const [sortByFilter, setSortByFilter] = useState('Most Upvotes')
  const [filterByCategory, setFilterByCategory] = useState('all')
  const [feedbackList, setFeedbackList] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllFeedback().then((feedbackList) => {
      setFeedbackList(feedbackList)
      setIsLoading(false)
    })
  }, [])

  const filteredFeedbackList = feedbackList
    .filter(filterByCategories(filterByCategory))
    .sort(sortByVotesAndComments(sortByFilter))

  return (
    <div className='flex flex-col lg:flex-row min-h-screen w-full lg:justify-center md:p-11 lg:p-0 lg:pt-20'>
      <Header
        filterByCategory={filterByCategory}
        setFilterByCategory={setFilterByCategory}
      />
      <main className='flex flex-col md:mt-8 lg:mt-0 lg:ml-8 w-full lg:w-[45rem]'>
        <ManageBar
          suggestionsCount={filteredFeedbackList.length}
          sortByFilter={sortByFilter}
          setSortByFilter={setSortByFilter}
        />
        <div className='px-4 pb-4 md:px-0 md:pb-0'>
          {isLoading && 'Loading...'}
          {!filteredFeedbackList.length && !isLoading && <NoFeedback />}
          {filteredFeedbackList?.map((feedback) => (
            <Link key={feedback.id} to={`/feedback/${feedback.id}`}>
              <Card
                title={feedback.title}
                description={feedback.body}
                comment={feedback.commentsCount}
                category={feedback.category}
                vote={feedback.votesCount}
              ></Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
