import { FaAngleUp, FaComment } from 'react-icons/fa'

type CardProps = {
  title: string
  description: string
  comment: number
  category: string
  vote: number
}

function Card({ title, description, comment, category, vote }: CardProps) {
  return (
    <div className='bg-white flex rounded-lg justify-between p-6 h-44 md:h-36 w-full flex-wrap md:flex-nowrap hover:cursor-pointer mb-8'>
      <div className='flex order-2 mt-2 md:mt-0 md:order-1 w-16 md:w-9 h-8 md:h-14 bg-light-grey flex-wrap md:flex-nowrap md:flex-col p-2 justify-between md:justify-center items-center rounded-lg hover:bg-light-grey-hov'>
        <FaAngleUp className='text-light-blue' />
        <p className='text-dark-blue font-bold text-xs md:text-sm'>{vote}</p>
      </div>

      <div className='flex w-full grow justify-between md:order-2 order-1 flex-col md:ml-5'>
        <p className='text-light-blue font-bold'>{title}</p>
        <p className='text-dark-blue text-sm'>
        {description}
        </p>
        <div className='bg-light-grey flex justify-center w-fit py-1 px-4  items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm'>
          {category}
        </div>
      </div>

      <div className='flex items-center order-3'>
        <FaComment className='text-2xl text-light-grey' />
        <p className='ml-3 font-bold text-lg'>{comment}</p>
      </div>
    </div>
  )
}

export default Card
