export const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

export const getAccessToken = () => {
  return localStorage.getItem('accessToken')
}

export function setRefreshToken(token: string) {
  localStorage.setItem('refreshToken', token)
}
