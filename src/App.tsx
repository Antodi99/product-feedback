import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router-dom'
import EditFeedbackPage from './components/EditFeedbackPage'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/EditFeedback' element={<EditFeedbackPage />} />
    </Routes>
  )
}

export default App
