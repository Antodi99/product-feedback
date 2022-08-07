import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import FeedbackPage from './components/FeedbackPage'
import RoadmapPage from './components/RoadmapPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/feedback/:id' element={<FeedbackPage />} />
      <Route path='/roadmap' element={<RoadmapPage />} />
    </Routes>
  )
}

export default App
