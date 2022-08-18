import Avatar from '../assets/images/users/image-roxanne.jpg'

function Comment() {
  return (
    <div className='bg-white flex rounded-lg p-6 h-fit w-full mt-4'>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src={Avatar}
              className='h-9 w-9 md:w-12 md:h-12 rounded-3xl'
            ></img>
            <div className='flex flex-col ml-2'>
              <p className='text-xs md:text-base text-dark-blue font-bold'>
                Roxanne Travis
              </p>
              <p className='text-xs md:text-base text-dark-blue'>
                @peppersprime32
              </p>
            </div>
          </div>
          <button className='text-xs md:text-base text-light-blue font-bold'>
            Reply
          </button>
        </div>
        <div>
          <p className='text-dark-blue text-xs md:text-base lg:text-lg mt-6'>
            I had learnt 5min python lesson. IT&apos;S AWESOME!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
