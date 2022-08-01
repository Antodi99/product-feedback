import { Card } from './components'

const App = () => {
  return (
    <div className='App'>
      <Card title={'Add Buton'} description={'123'} comment={1} category={'UI'} vote={12} />
      <Card title={'Add tags'} description={'1234'} comment={2} category={'Enhancement'} vote={13}/>
    </div>
  )
}

export default App
