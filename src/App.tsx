import Carddesktop from './components/CardDesktop'
import { useMediaQuery } from 'react-responsive'
import Cardmobile from './components/CardMobile'

const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 786px)'
  })

  return (
    <div className="App">
      {
        isMobile ? <Cardmobile /> : <Carddesktop />
      }
    </div>
  )
}

export default App
