import * as Yup from 'yup'
import { optionsCategory, optionsStatus } from './constants'

export const editFeedbackSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title has to be more than 5 characters!')
    .max(50, 'Title has to be less than 50 characters')
    .required('Required'),
  detail: Yup.string()
    .min(10, 'Description has to be more than 10 characters')
    .max(1000, 'Description has to be less than 1000 characters')
    .required('Required'),
  status: Yup.string()
    .oneOf(optionsStatus, 'Choose status!')
    .required('Required'),
  category: Yup.string()
    .oneOf(optionsCategory, 'Choose category!')
    .required('Required'),
})
