import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  deleteFeedback,
  Feedback,
  fetchDataByFeedbackId,
  updateFeedback,
} from '../../../../services/feedback.service'
import { Dropdown } from '../../../../components/Dropdown'
import {
  categoryMap,
  optionsCategory,
  optionsStatus,
  statusMap,
} from './constants'
import { editFeedbackSchema } from './validation'
import { ClipLoader } from 'react-spinners'

type FormValues = {
  id: number
  detail: string
  title: string
  status: string
  category: string
}

export function EditFeedback() {
  const [feedback, setFeedback] = useState<Feedback | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchDataByFeedbackId(id).then(async (data) => {
      setFeedback(data[0])
      setIsLoading(false)
    })
  }, [])

  const handleDeleteFeedback = async () => {
    await deleteFeedback(Number(id))
    navigate('/')
  }

  const handleUpdateFeedback = async ({
    id,
    detail,
    title,
    status,
    category,
  }: FormValues) => {
    await updateFeedback(Number(id), detail, title, status, category)
    navigate(`/feedback/${id}`)
  }

  if (isLoading)
    return (
      <div className='flex justify-center items-center min-h-[70vh]'>
        <ClipLoader color={'#D946EF'} loading={isLoading} size={150} />
      </div>
    )

  if (!feedback) return <div>Feedback not found</div>

  const initialValues: FormValues = {
    title: feedback.title,
    detail: feedback.body,
    status: statusMap[feedback.status],
    category: categoryMap[feedback.category],
    id: feedback.id,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleUpdateFeedback(values)
      }}
      validationSchema={editFeedbackSchema}
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
              Editing &rsquo;
              {values.title.length > 30
                ? values.title.slice(0, 30) + '...'
                : values.title}
              &rsquo;
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
                type={'category'}
              />
            </div>
            <div className='mt-8'>
              <p className='text-dark-blue text-sm font-bold'>Update Status</p>
              <p className='text-dark-blue text-sm'>Change feedback state</p>
              <Dropdown
                selected={values.status}
                handleChange={handleChange as any}
                options={optionsStatus}
                errors={errors.status}
                touched={touched.status}
                type={'status'}
              />
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
                id='detai'
                name='detail'
                onBlur={handleBlur}
              ></textarea>
              {errors.detail && touched.detail ? (
                <div className='text-rose-500'>{errors.detail}</div>
              ) : null}
            </div>
            <div className='flex flex-col-reverse md:flex-row md:justify-between mt-10'>
              <div
                className='rounded-xl p-2 md:p-3 mt-3 md:mt-0 md:px-6 bg-red-900 w-content flex items-center justify-center hover:bg-red-400 cursor-pointer'
                onClick={handleDeleteFeedback}
              >
                <p className='text-white font-bold text-sm'>Delete</p>
              </div>
              <div className='flex flex-col-reverse md:flex-row'>
                <div className='rounded-xl p-2 md:p-3 mt-3 md:mt-0 md:px-6 bg-dark-blue w-content flex items-center justify-center hover:bg-light-blue cursor-pointer'>
                  <p className='text-white font-bold text-sm'>Cancel</p>
                </div>
                <div
                  className='rounded-xl p-2 md:p-3 bg-fuchsia-500 w-content md:ml-3 flex items-center justify-center hover:bg-fuchsia-400 cursor-pointer'
                  onClick={() => handleSubmit()}
                >
                  <p className='text-white font-bold text-sm'>Save Changes</p>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </Formik>
  )
}
