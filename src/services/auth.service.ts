// let accessToken: string

export const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
  // accessToken = token
}

export const getAccessToken = () => {
  // return accessToken
  return localStorage.getItem('accessToken')
}

export function setRefreshToken(token: string) {
  localStorage.setItem('refreshToken', token)
}
