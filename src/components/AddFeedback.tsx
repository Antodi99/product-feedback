import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { addFeedback } from '../services/feedback.service'
import { Dropdown } from './Dropdown'

const optionsCategory = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature']

const addFeedbackSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title has to be longer then 5 characters!')
    .max(50, 'Title has to be less then 50 characters')
    .required('Required'),
  detail: Yup.string()
    .min(10, 'Description has to be longer then 10 characters')
    .max(1000, 'Description has to be less then 1000 characters')
    .required('Required'),
  category: Yup.string()
    .oneOf(['ui', 'ux', 'enhancement', 'bug', 'feature'], 'Choose category!')
    .required('Required'),
})

function AddFeedback() {
  const navigate = useNavigate()

  const handleAddFeedback = async ({ detail, title, category }: any) => {
    await addFeedback(detail, title, category)
    navigate('/')
  }

  return (
    <Formik
      initialValues={{ title: '', detail: '', category: 'Category' }}
      onSubmit={(values) => {
        handleAddFeedback(values)
      }}
      validationSchema={addFeedbackSchema}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => {
        console.log(errors)
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
              ></input>
              {errors.title && touched.title ? (
                <div className='text-rose-500'>{errors.title}</div>
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

export default AddFeedback
