import { FaAngleUp, FaComment } from 'react-icons/fa'

function Card() {
  return (
    <div className='bg-white flex justify-between p-6 h-44 md:h-36 w-full flex-wrap md:flex-nowrap hover:cursor-pointer'>
      <div className='flex order-2 mt-2 md:mt-0 md:order-1 w-16 md:w-9 h-8 md:h-14 bg-light-grey flex-wrap md:flex-nowrap md:flex-col p-2 justify-between md:justify-center items-center rounded-lg hover:bg-light-grey-hov'>
        <FaAngleUp className='text-light-blue' />
        <p className='text-dark-blue font-bold text-xs md:text-sm'>112</p>
      </div>

      <div className='flex w-full grow justify-between md:order-2 order-1 flex-col md:ml-5'>
        <p className='text-light-blue font-bold'>Add tags or solution</p>
        <p className='text-dark-blue text-sm'>
          Easier to search for solutions based on a specific stack.
        </p>
        <div className='bg-light-grey flex justify-center w-28 h-8 items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm'>
          Enhancement
        </div>
      </div>

      <div className='flex items-center order-3'>
        <FaComment className='text-2xl text-light-grey' />
        <p className='ml-3 font-bold text-lg'>2</p>
      </div>
    </div>
  )
}

export default Card
