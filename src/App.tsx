import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import FeedbackPage from './components/FeedbackPage'
import RoadmapPage from './components/RoadmapPage'
import AddFeedbackPage from './components/AddFeedbackPage'
import EditFeedbackPage from './components/EditFeedbackPage'

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
