import React from 'react'
import Category from './UI/CattegoryButton'
import HeaderBox from './UI/HeaderBox'

function Header() {
  return (
    <header className='h-96 w-2/12 mt-24 px-8 pb-8'>
        <div className='h-1/3 bg-background-header bg-no-repeat flex items-end rounded-lg'>
          <h1 className='m-4 text-white font-bold text-xl'>Feedback Card</h1>
        </div>
      <ul className='h-full'>

        <HeaderBox >
          <ul className='h-fix flex flex-wrap'>
            <Category category={'All'} />
            <Category category={'UI'} />
            <Category category={'UX'} />
            <Category category={'Enhancement'} />
            <Category category={'Bug'} />
            <Category category={'Feature'} />
          </ul>
        </HeaderBox>

        <HeaderBox >
          <div className='flex justify-between'>
          <p className='text-lg font-bold text-dark-blue'>Roadmap</p>
          <button className='text-light-blue underline text-sm'>View</button>
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
    </header>
  )
}

export default Header
