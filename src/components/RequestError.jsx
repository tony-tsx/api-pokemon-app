const RequestError = ( { error, status = {} } ) => {
  return (
    <div class="alert alert-danger" role="alert">
      {status[error.response.status] ?? error.response?.data ?? 'Has error'}
    </div>
  )
}

export default RequestError
