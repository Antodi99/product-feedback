import { useSearchParams, Navigate } from 'react-router-dom'
import LoginMenu from '../components/LoginMenu'
import { setAccessToken, setRefreshToken } from '../services/auth.service'

function LoginPage() {
  const [searchParams] = useSearchParams()
  const accessToken = searchParams.get('access_token')
  const refreshToken = searchParams.get('refresh_token')

  if (accessToken && refreshToken) {
    setAccessToken(accessToken)
    setRefreshToken(refreshToken)
    return <Navigate to='/' />
  }

  return (
    <div className='justify-center w-full h-screen items-center bg-gradient-to-tr from-sky-400 via-fuchsia-700 to-orange-200 flex'>
      <LoginMenu />
    </div>
  )
}

export default LoginPage
