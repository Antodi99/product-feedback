let accessToken: string

export const setAccessToken = (token: string) => {
  accessToken = token
}

export const getAccessToken = () => accessToken

export function setRefreshToken(token: string) {
  localStorage.setItem('token', token)
}
