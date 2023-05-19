import nock from 'nock'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { EditFeedback } from './EditFeedbackForm'
import { BACKEND_API_URL } from '../../../../config'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Feedback } from '../../../../services/feedback.service'

describe('EditFeedback', () => {
  const feedback: Feedback = {
    body: 'Feedback body',
    category: 'UI',
    id: 1,
    status: 'idea',
    title: 'Feedback title',
    comments: [],
    votes: [],
  }
  const defaultFeedbackRoute = `/feedback/${feedback.id}/edit`

  const setup = (url = defaultFeedbackRoute) => {
    return render(
      <MemoryRouter initialEntries={[url]}>
        <Routes>
          <Route path='/' element={<div>Home</div>}></Route>
          <Route path='/feedback/:id/edit' element={<EditFeedback />}></Route>
          <Route
            path='/feedback/:id'
            element={<div>Feedback Page</div>}
          ></Route>
        </Routes>
      </MemoryRouter>
    )
  }

  it('renders properly', async () => {
    const scope = nock(BACKEND_API_URL)
      .get(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200, feedback)

    const { container } = setup()

    await screen.findByTestId('title')
    scope.done()
    expect(container).toMatchSnapshot()
  })

  it('feedback not found', async () => {
    const scope = nock(BACKEND_API_URL)
      .get(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(404)

    setup()

    await screen.findByText('Feedback not found')
    scope.done()
  })

  it('user sumbits form', async () => {
    const getFeedback = nock(BACKEND_API_URL)
      .get(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200, feedback)

    const updateFeedback = nock(BACKEND_API_URL)
      .put(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200)

    setup()

    const title = await screen.findByTestId('title')
    await userEvent.type(title, 'Add Comment')

    const detail = screen.getByTestId('detail')
    await userEvent.type(detail, 'Add Comment')

    const category = screen.getByTestId('category')
    await userEvent.click(category)
    await userEvent.click(await screen.findByText('UI'))

    const status = screen.getByTestId('status')
    await userEvent.click(status)
    await userEvent.click(await screen.findByText('Done'))

    await userEvent.click(screen.getByText('Save Changes'))
    getFeedback.done()
    updateFeedback.done()

    await screen.findByText(/feedback page/i)
  })

  it('user deletes feedback', async () => {
    const getFeedback = nock(BACKEND_API_URL)
      .get(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200, feedback)

    const deleteFeedback = nock(BACKEND_API_URL)
      .delete(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200)

    setup()

    const deleteBtn = await screen.findByTestId('delete')
    userEvent.click(deleteBtn)
    getFeedback.done()
    await screen.findByText(/home/i)
    deleteFeedback.done()
  })

  it('user clicks cancel button', async () => {
    const getFeedback = nock(BACKEND_API_URL)
      .get(`/api/feedback/${feedback.id}`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200, feedback)

    setup()

    const cancelBtn = await screen.findByTestId('cancel')
    userEvent.click(cancelBtn)
    getFeedback.done()
    await screen.findByText(/feedback page/i)
  })
})
