import nock from 'nock'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { BACKEND_API_URL } from '../../config'
import { AddComment } from './AddComment'

describe('AddComment', () => {
  it('renders properly', async () => {
    const { container } = render(
      <AddComment id='1' refreshComments={jest.fn()} />
    )
    expect(container).toMatchSnapshot()
  })

  it('handles submit', async () => {
    const scope = nock(BACKEND_API_URL)
      .post('/api/comments/')
      .matchHeader('authorization', /^Bearer .*$/)
      .times(1)
      .reply(200)
    const refreshCommentsMock = jest.fn()
    render(<AddComment id='1' refreshComments={refreshCommentsMock} />)

    const textArea = screen.getByTestId('comment')
    await userEvent.type(textArea, 'Add Comment')
    await userEvent.click(screen.getByText('Post Comment'))
    scope.done()
    await waitFor(() => expect(refreshCommentsMock).toHaveBeenCalledTimes(1))
  })
})
