import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import signIn from '../actions/signIn'
import Card from '../components/Card'
import Col from '../components/Col'
import Container from '../components/Container'
import FormGroup from '../components/FormGroup'
import RequestError from '../components/RequestError'
import Row from '../components/Row'
import api from '../services/api'

const Login = () => {

  const dispatch = useDispatch()

  const [ err, setErr ] = useState( null )

  const [ loading, setLoading ] = useState( false )

  const handlerSubmit = useCallback( ( event ) => {
    event.preventDefault()
    const data = Object.fromEntries( new FormData( event.currentTarget ) )

    setLoading( true )
    api.post( '/signin', data )
      .then( async response => {
        const authorization = response.data.accessToken
        return api.get( '/users', { params: { email: data.email } } )
          .then( response => response.data[0] )
          .then( user => ( { ...user, authorization } ) )
      } )
      .then( user => dispatch( signIn( user ) ) )
      .catch( reason => setErr( reason ) )
      .finally( () => setLoading( false ) )
  }, [ dispatch ] )

  return (
    <Container className='h-100'>
      <Row className='align-items-center justify-content-center h-100'>
        <Col sm={10} md={8} lg={6} xl={5}>
          <Card>
            <Card.Body>
              { err && <RequestError error={err} /> }
              <Card.Title>Sign In</Card.Title>
              <form onSubmit={handlerSubmit}>
                <FormGroup label='E-mail' name='email' type='email' disabled={loading}/>
                <FormGroup label='Password' name='password' type='password' disabled={loading}/>
                <div className="mb-3">
                  <Link to='/register'>Sign Up</Link>
                </div>
                <button className="btn btn-primary" disabled={loading}>
                  { loading && <span className="spinner-border spinner-border-sm"/> }
                  { loading ? 'Loading...' : 'Sign In' }
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
