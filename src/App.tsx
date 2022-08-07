import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import FeedbackPage from './components/FeedbackPage'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/feedback/:id' element={<FeedbackPage />} />
    </Routes>
  )
}

export default App
