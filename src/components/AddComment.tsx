import { useState } from 'react'
import { createComment } from '../services/comments.service'

type AddCommentProps = {
  id: string
  refreshComments: () => Promise<void>
}

const MAX_INPUT_LENGTH = 250

export function AddComment({ id, refreshComments }: AddCommentProps) {
  const [text, setText] = useState('')

  const handleAddComment = async () => {
    await createComment(text, Number(id))
    refreshComments()
  }

  return (
    <div className='bg-white flex flex-col rounded-lg p-6 h-fit w-full mt-4'>
      <p className='text-dark-blue text-lg font-bold'>Add Comment</p>
      <textarea
        className='bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-20 text-dark-blue'
        placeholder='Type your comment here'
        onChange={(e) => {
          setText(e.target.value)
        }}
        maxLength={MAX_INPUT_LENGTH}
        value={text}
      ></textarea>
      <div className='flex justify-between mt-4 items-center text-dark-blue text-sm'>
        <p>{MAX_INPUT_LENGTH - text.length} Characters left</p>
        <div
          onClick={handleAddComment}
          className='rounded-xl p-3 bg-fuchsia-500 w-fit md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'
        >
          <p className='text-white font-bold text-xs'>Post Comment</p>
        </div>
      </div>
    </div>
  )
}
