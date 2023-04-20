import { Formik } from 'formik'
import * as Yup from 'yup'
import { createComment } from '../services/comments.service'

type AddCommentProps = {
  id: string
  refreshComments: () => Promise<void>
}

const MAX_INPUT_LENGTH = 250

const addCommentSchema = Yup.object().shape({
  comment: Yup.string()
    .min(5, 'Comment has to be more than 5 characters!')
    .max(250, 'Comment has to be less than 250 characters')
    .required('Required'),
})

export function AddComment({ id, refreshComments }: AddCommentProps) {
  const handleAddComment = async ({ comment }: any) => {
    await createComment(comment, Number(id))
    refreshComments()
  }

  return (
    <Formik
      initialValues={{ comment: '' }}
      onSubmit={(values) => {
        handleAddComment(values)
      }}
      validationSchema={addCommentSchema}
      validateOnBlur
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        handleBlur,
      }) => {
        return (
          <div className='bg-white flex flex-col rounded-lg p-6 h-fit w-full mt-4'>
            <p className='text-dark-blue text-lg font-bold'>Add Comment</p>
            <textarea
              className={
                errors.comment && touched.comment
                  ? 'bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-auto min-h-[9rem] text-sm text-dark-blue border-rose-500 border-2 border-solid'
                  : 'bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-auto min-h-[9rem] text-sm text-dark-blue'
              }
              placeholder='Type your comment here'
              onChange={handleChange}
              value={values.comment}
              id='comment'
              name='comment'
              onBlur={handleBlur}
            ></textarea>
            {errors.comment && touched.comment ? (
              <div className='text-rose-500 mt-1'>{errors.comment}</div>
            ) : null}
            <div className='flex justify-between mt-4 items-center text-dark-blue text-sm'>
              <p>{MAX_INPUT_LENGTH - values.comment.length} Characters left</p>
              <div
                onClick={() => handleSubmit()}
                className='rounded-xl p-3 bg-fuchsia-500 w-fit md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'
              >
                <p className='text-white font-bold text-xs'>Post Comment</p>
              </div>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}
