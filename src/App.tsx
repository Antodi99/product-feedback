import { Card } from './components'
import Header from './components/Header'

const App = () => {
  return (
    <div className='App flex justify-center'>
      <Header/>
      <main className='w-4/12 mt-24'>
      <Card title={'Add Buton'} description={'123'} comment={1} category={'UI'} vote={12} />
      <Card title={'Add tags'} description={'1234'} comment={2} category={'Enhancement'} vote={13}/>
      </main>
    </div>
  )
}

export default App
