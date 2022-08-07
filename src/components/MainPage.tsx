import { Link } from 'react-router-dom'
import { Card } from './Card'
import { Header } from './Header'
import ManageBar from './ManageBar'

function MainPage() {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen w-screen lg:justify-center md:p-11 lg:pt-20'>
      <Header />
      <main className='flex flex-col md:mt-8 lg:mt-0 lg:ml-8 w-full lg:w-5/12'>
        <ManageBar />
        <div className='px-4 pb-4 md:px-0 md:pb-0'>
          <Link to={'/feedback/${feedback.id}'}>
            <Card
              title={'12312'}
              description={'1231'}
              comment={1231}
              category={'1231'}
              vote={121}
            ></Card>
          </Link>
          <Card
            title={'12312'}
            description={'1231'}
            comment={1231}
            category={'1231'}
            vote={121}
          ></Card>
          <Card
            title={'12312'}
            description={'1231'}
            comment={1231}
            category={'1231'}
            vote={121}
          ></Card>
        </div>
      </main>
    </div>
  )
}

export default MainPage
