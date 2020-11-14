import RequestError from './RequestError'

const ErrorMessage = ( { error, ...props } ) => {
  if ( 'isAxiosError' in error ) return <RequestError error={error} {...props} />
  return (
    <div class="alert alert-danger" role="alert">
      {error.message}
    </div>
  )
}

export default ErrorMessage
