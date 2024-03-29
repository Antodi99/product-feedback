export type CommentCard = {
  name: string
  userName: string
  body: string
  avatar: string
}

export function Comment({ name, userName, body, avatar }: CommentCard) {
  return (
    <div className='bg-white flex rounded-lg p-6 h-fit w-full mt-4'>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src={avatar}
              className='h-9 w-9 md:w-12 md:h-12 rounded-3xl'
            ></img>
            <div className='flex flex-col ml-2'>
              <p className='text-xs md:text-base text-dark-blue font-bold'>
                {name}
              </p>
              <p className='text-xs md:text-base text-dark-blue'>{userName}</p>
            </div>
          </div>
          <button className='text-xs md:text-base text-light-blue font-bold'>
            Reply
          </button>
        </div>
        <div>
          <p className='overflow-x-hidden text-dark-blue text-xs md:text-base lg:text-lg mt-6'>
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}
