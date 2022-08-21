import { Routes, Route } from 'react-router-dom'
import {
  AddFeedbackPage,
  EditFeedbackPage,
  FeedbackPage,
  RoadmapPage,
  MainPage,
} from './pages'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/feedback/:id' element={<FeedbackPage />} />
      <Route path='/roadmap' element={<RoadmapPage />} />
      <Route path='/feedback/add' element={<AddFeedbackPage />} />
      <Route path='/feedback/:id/edit' element={<EditFeedbackPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
