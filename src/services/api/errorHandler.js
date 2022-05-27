export const handleError = (error) => {
  const response = {
    code: 503,
    error: undefined,
    data: undefined,
    success: false
  }
  return response
}

