import { ReactNode, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  AddFeedbackPage,
  EditFeedbackPage,
  FeedbackPage,
  RoadmapPage,
  MainPage,
  LoginPage,
} from './pages'
import { getCurrentUser } from './services/user.service'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCurrentUser().then((user) => {
      setIsLoggedIn(!!user)
      setIsLoading(false)
    })
  }, [])

  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={isLoggedIn}>
            <MainPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/:id'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={isLoggedIn}>
            <FeedbackPage />
          </AuthRequired>
        }
      />
      <Route
        path='/roadmap'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={isLoggedIn}>
            <RoadmapPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/add'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={isLoggedIn}>
            <AddFeedbackPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/:id/edit'
        element={
          <AuthRequired isLoading={isLoading} isLoggedIn={isLoggedIn}>
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
  if (isLoading) return <div>Loading...</div>
  if (!isLoggedIn) return <Navigate to='/login' />
  return children as JSX.Element
}
