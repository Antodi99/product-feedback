import React, { useState } from 'react'

function AddComment() {
  const [text, setText] = useState('')
  const [characters] = useState(250)
  return (
    <div className='bg-white flex flex-col rounded-lg p-6 h-fit w-full mt-4'>
      <p className='text-dark-blue text-lg font-bold'>Add Comment</p>
      <textarea
        className='bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-20 text-dark-blue'
        placeholder='Type your comment here'
        onChange={(e) => {
          setText(e.target.value)
        }}
        maxLength='250'
      >
        {text}
      </textarea>
      <div className='flex justify-between mt-4 items-center text-dark-blue text-sm'>
        <p>{characters - text.length} Characters left</p>
        <div className='rounded-xl p-3 bg-fuchsia-500 w-fit md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'>
          <p className='text-white font-bold text-xs'>Post Comment</p>
        </div>
      </div>
    </div>
  )
}

export default AddComment
