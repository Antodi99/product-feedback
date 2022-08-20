import { Link } from 'react-router-dom'
import { CategoryButton } from './CattegoryButton'
import { HeaderBox } from './HeaderBox'

export enum Category {
  UI = 'ui',
  UX = 'ux',
  Enhancement = 'enhancement',
  Defect = 'defect',
  Feature = 'feature',
}

const options = ['all', ...Object.values(Category)]

type HeaderProps = {
  filterByCategory: string
  setFilterByCategory: (selected: string) => void
}

export function Header({ filterByCategory, setFilterByCategory }: HeaderProps) {
  return (
    <ul className='Header flex lg:flex-col h-2/5 w-full lg:w-56'>
      <li className='md:w-1/3 h-auto lg:h-32 lg:w-full grow bg-background-header bg-no-repeat bg-cover flex items-end md:rounded-lg p-4'>
        <h1 className='text-white font-bold text-xl'>Feedback Board</h1>
      </li>

      <HeaderBox>
        <ul className='h-fix flex flex-wrap'>
          {options.map((category, idx) => (
            <div onClick={() => setFilterByCategory(category)} key={idx}>
              <CategoryButton category={category} active={filterByCategory} />
            </div>
          ))}
        </ul>
      </HeaderBox>

      <HeaderBox>
        <div className='flex justify-between'>
          <p className='text-lg font-bold text-dark-blue'>Roadmap</p>
          <Link to={'/roadmap'}>
            <button className='text-light-blue underline text-sm'>View</button>
          </Link>
        </div>
        <ul className='mt-5 list-disc'>
          <li className='flex justify-between'>
            <div className='flex items-center'>
              <div className='rounded-xl w-2.5 h-2.5 bg-amber-500'></div>
              <p className='text-dark-blue ml-3 '>Planned</p>
            </div>
            <p className='text-neutral-600 font-bold mr-2'>2</p>
          </li>
          <li className='flex justify-between mt-3'>
            <div className='flex items-center'>
              <div className='rounded-xl w-2.5 h-2.5 bg-purple-600'></div>
              <p className='text-dark-blue ml-3'>In-Progress</p>
            </div>
            <p className='text-neutral-600 font-bold mr-2'>3</p>
          </li>
          <li className='flex justify-between mt-3'>
            <div className='flex items-center'>
              <div className='rounded-xl w-2.5 h-2.5 bg-cyan-500'></div>
              <p className='text-dark-blue ml-3'>Live</p>
            </div>
            <p className='text-neutral-600 font-bold mr-2 ml-3'>1</p>
          </li>
        </ul>
      </HeaderBox>
    </ul>
  )
}
