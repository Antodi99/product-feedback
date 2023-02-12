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

  useEffect(() => {
    getCurrentUser().then((user) => {
      setIsLoggedIn(!!user)
    })
  }, [])

  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthRequired isLoggedIn={isLoggedIn}>
            <MainPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/:id'
        element={
          <AuthRequired isLoggedIn={isLoggedIn}>
            <FeedbackPage />
          </AuthRequired>
        }
      />
      <Route
        path='/roadmap'
        element={
          <AuthRequired isLoggedIn={isLoggedIn}>
            <RoadmapPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/add'
        element={
          <AuthRequired isLoggedIn={isLoggedIn}>
            <AddFeedbackPage />
          </AuthRequired>
        }
      />
      <Route
        path='/feedback/:id/edit'
        element={
          <AuthRequired isLoggedIn={isLoggedIn}>
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
}

function AuthRequired({ children, isLoggedIn }: AuthRequiredProps) {
  if (!isLoggedIn) return <Navigate to='/login' />
  return children as any
}
