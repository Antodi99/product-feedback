import { Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { addFeedback } from '../../../../services/feedback.service'
import { Dropdown } from '../../../../components/Dropdown'
import { optionsCategory } from './constants'
import { addFeedbackSchema } from './validation'

type FormValues = {
  detail: string
  title: string
  category: string
}

const initialValues: FormValues = {
  title: '',
  detail: '',
  category: optionsCategory[0],
}

export function AddFeedback() {
  const navigate = useNavigate()

  const handleAddFeedback = async ({ detail, title, category }: FormValues) => {
    await addFeedback(detail, title, category)
    navigate('/')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleAddFeedback(values)
      }}
      validationSchema={addFeedbackSchema}
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
          <div className='bg-white flex flex-col rounded-lg p-6 h-fit w-full'>
            <h1 className='text-dark-blue text-2xl font-bold'>
              Create New Feedback
            </h1>
            <div className='mt-4'>
              <p className='text-dark-blue text-sm font-bold'>Feedback Title</p>
              <p className='text-dark-blue text-sm'>
                Add a short, descriptive headline
              </p>
              <input
                className={
                  errors.title && touched.title
                    ? 'bg-light-grey p-2 w-full outline-none rounded-lg mt-4 border-rose-500 border-2 border-solid'
                    : 'bg-light-grey p-2 w-full outline-none rounded-lg mt-4'
                }
                onChange={handleChange}
                value={values.title}
                id='title'
                name='title'
                onBlur={handleBlur}
              ></input>
              {errors.title && touched.title ? (
                <div className='text-rose-500 mt-1'>{errors.title}</div>
              ) : null}
            </div>
            <div className='mt-8'>
              <p className='text-dark-blue text-sm font-bold'>Category</p>
              <p className='text-dark-blue text-sm'>
                Choose a category for you feedback
              </p>
              <Dropdown
                selected={values.category}
                handleChange={handleChange as any}
                options={optionsCategory}
                errors={errors.category}
                touched={touched.category}
              />
              {errors.category && touched.category ? (
                <div className='text-rose-500'>{errors.category}</div>
              ) : null}
            </div>
            <div className='mt-8'>
              <p className='text-dark-blue text-sm font-bold'>
                Feedback Detail
              </p>
              <p className='text-dark-blue text-sm'>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea
                className={
                  errors.detail && touched.detail
                    ? 'bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-32 border-rose-500 border-2 border-solid'
                    : 'bg-light-grey p-2 resize-none w-full outline-none rounded-lg mt-4 h-32'
                }
                onChange={handleChange}
                value={values.detail}
                name='detail'
                id='detail'
                onBlur={handleBlur}
              ></textarea>
              {errors.detail && touched.detail ? (
                <div className='text-rose-500'>{errors.detail}</div>
              ) : null}
            </div>
            <div className='flex flex-col-reverse md:flex-row md:justify-end mt-10'>
              <Link to={'/'}>
                <div className='rounded-xl p-2 md:p-3 mt-3 md:mt-0 md:px-6 bg-dark-blue w-content flex items-center justify-center hover:bg-light-blue cursor-pointer'>
                  <p className='text-white font-bold text-sm'>Cancel</p>
                </div>
              </Link>
              <div
                className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-content md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'
                onClick={() => handleSubmit()}
              >
                <p className='text-white font-bold text-sm'>Add Feedback</p>
              </div>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}
