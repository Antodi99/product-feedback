import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { Header } from './Header'
import ManageBar from './ManageBar'

type Feedback = {
  id: number
  title: string
  description: string
  commentsCount: number
  category: string
  votesCount: number
}

const feedbackList: Feedback[] = [
  {
    id: 1,
    title: 'test title',
    description: 'some description',
    commentsCount: 3,
    category: 'category',
    votesCount: 34,
  },
  {
    id: 2,
    title: 'test title',
    description: 'some description',
    commentsCount: 3,
    category: 'category',
    votesCount: 36,
  },
  {
    id: 3,
    title: 'test title',
    description: 'some description',
    commentsCount: 2,
    category: 'category',
    votesCount: 35,
  },
]

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

function MainPage() {
  const [sortByFilter, setSortByFilter] = useState('Most Upvotes')

  const filteredFeedbackList = feedbackList.sort(
    sortByVotesAndComments(sortByFilter)
  )

  return (
    <div className='flex flex-col lg:flex-row min-h-screen w-screen lg:justify-center md:p-11 lg:p-0 lg:pt-20'>
      <Header />
      <main className='flex flex-col md:mt-8 lg:mt-0 lg:ml-8 w-full lg:w-[45rem]'>
        <ManageBar
          sortByFilter={sortByFilter}
          setSortByFilter={setSortByFilter}
        />
        <div className='px-4 pb-4 md:px-0 md:pb-0'>
          {filteredFeedbackList.map((feedback) => (
            <Link key={feedback.id} to={`/feedback/${feedback.id}`}>
              <Card
                title={feedback.title}
                description={feedback.description}
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

export default MainPage
