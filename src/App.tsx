import { Routes, Route } from 'react-router-dom'
import {
  AddFeedbackPage,
  EditFeedbackPage,
  FeedbackPage,
  RoadmapPage,
} from './components'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/feedback/:id' element={<FeedbackPage />} />
      <Route path='/roadmap' element={<RoadmapPage />} />
      <Route path='/feedback/add' element={<AddFeedbackPage />} />
      <Route path='/feedback/:id/edit' element={<EditFeedbackPage />} />
    </Routes>
  )
}

export default App
