import { ReactNode, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'
import {
  AddFeedbackPage,
  EditFeedbackPage,
  FeedbackPage,
  RoadmapPage,
  MainPage,
  LoginPage,
} from './pages'
import { getCurrentUser, User } from './services/user.service'

const App = () => {
  const [user, setUser] = useState<User | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [])

  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={Boolean(user)}>
            <MainPage user={user} />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/:id'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={Boolean(user)}>
            <FeedbackPage user={user} />
          </AuthRequired>
        }
      />
      <Route
        path='/roadmap'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={Boolean(user)}>
            <RoadmapPage user={user} />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/add'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={Boolean(user)}>
            <AddFeedbackPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/:id/edit'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={Boolean(user)}>
            <EditFeedbackPage />
          </AuthRequired>
        }
      />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App

type AuthRequiredProps = {
  children: ReactNode
  isLoggedIn: boolean
  isLoading: boolean
}

function AuthRequired({ children, isLoggedIn, isLoading }: AuthRequiredProps) {
  if (isLoading)
    return (
      <div className='flex justify-center items-center'>
        <PacmanLoader color={'#D946EF'} loading={isLoading} size={150} />
      </div>
    )
  if (!isLoggedIn) return <Navigate to='/login' />
  return children as JSX.Element
}
