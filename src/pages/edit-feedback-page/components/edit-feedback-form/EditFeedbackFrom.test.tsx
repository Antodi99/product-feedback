import nock from 'nock'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { EditFeedback } from './EditFeedbackForm'
import { BACKEND_API_URL } from '../../../../config'
import { Router } from 'react-router-dom'

describe('EditFeedback', () => {
  it('renders properly', async () => {
    const feedbackId = '1'
    nock(BACKEND_API_URL)
      .get(`/api/comments/`)
      .query({ params: { feedbackId } })
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200)
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <EditFeedback />
      </Router>
    )
    expect(container).toMatchSnapshot()

    window.history.pushState({}, 'Test page', )
  })

  // it('1', async () => {
  //   const feedbackId = '1'
  //   const scope = nock(BACKEND_API_URL)
  //     .put(`/api/feedback/${feedbackId}`)
  //     .matchHeader('authorization', /^Bearer .*$/)
  //     .times(1)
  //     .reply(200)
  //   const saveChangesMock = jest.fn()

  //   const route = `/feedback/${feedbackId}/edit`

  //   render(
  // <MemoryRouter initialEntries={[route]}>
  //   <EditFeedback />
  // </MemoryRouter>
  //   )

  //   const title = screen.getByTestId('title')
  //   await userEvent.type(title, 'Add Comment')

  //   const detail = screen.getByTestId('detail')
  //   await userEvent.type(detail, 'Add Comment')

  //   const category = screen.getByTestId('category')
  //   await userEvent.click(category)
  //   await userEvent.click(await screen.findByText('UI'))

  //   const status = screen.getByTestId('status')
  //   await userEvent.click(status)
  //   await userEvent.click(await screen.findByText('Done'))

  //   await userEvent.click(screen.getByText('Save Changes'))
  //   scope.done()
  //   await waitFor(() => expect(saveChangesMock).toHaveBeenCalledTimes(1))
  // })
})
