import nock from 'nock'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AddFeedback } from './AddFeedbackForm'
import { BACKEND_API_URL } from '../../../../config'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('AddFeedback', () => {
  const defaultFeedbackRoute = `/feedback/add`

  const setup = (url = defaultFeedbackRoute) => {
    return render(
      <MemoryRouter initialEntries={[url]}>
        <Routes>
          <Route path='/' element={<div>Home</div>}></Route>
          <Route path='/feedback/add' element={<AddFeedback />}></Route>
        </Routes>
      </MemoryRouter>
    )
  }

  it('renders properly', async () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('renders properly', async () => {
    const scope = nock(BACKEND_API_URL)
      .post(`/api/feedback/`)
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200)

    setup()

    const title = await screen.findByTestId('title')
    await userEvent.type(title, 'Add Comment')

    const detail = screen.getByTestId('detail')
    await userEvent.type(detail, 'Add Comment')

    await userEvent.click(screen.getByText('Add Feedback'))
    scope.done()
    await screen.findByText(/home/i)
  })

  it('user clicks cancel button', async () => {
    setup()

    const cancelBtn = await screen.findByText(/cancel/i)
    userEvent.click(cancelBtn)
    await screen.findByText(/home/i)
  })
})
