import { useCallback, useState,
  // useState
} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Card from '../components/Card'
import Col from '../components/Col'
import Container from '../components/Container'
import FormGroup from '../components/FormGroup'
import RequestError from '../components/RequestError'
import Row from '../components/Row'
import api from '../services/api'

const Register = () => {
  // const [ name, setName ] = useState( '' )
  // const [ email, setEmail ] = useState( '' )
  // const [ password, setPassword ] = useState( '' )

  const [ err, setErr ] = useState( null )
  const [ loading, setLoading ] = useState( false )

  const history = useHistory()

  const handlerSubmit = useCallback( ( event ) => {
    event.preventDefault()
    const data = Object.fromEntries( new FormData( event.currentTarget ) )

    setLoading( true )
    api.post( '/users', data )
      .then( response => history.push( '/login' ) )
      .catch( reason => setErr( reason ) )
      .finally( () => setLoading( false ) )
  }, [ history ] )

  return (
    <Container className='h-100'>
      <Row className='align-items-center justify-content-center h-100'>
        <Col sm={10} md={8} lg={6} xl={5}>
          <Card>
            <Card.Body>
              { err && <RequestError error={err} /> }
              <Card.Title>Sign Up</Card.Title>
              <form onSubmit={handlerSubmit}>
                <FormGroup label='Name' required name='name' type='text' pattern='^([A-z]| ){10,}' disabled={loading}/>
                <FormGroup label='Nick' required name='nick' type='text' pattern='^([a-z-]| ){4,}' disabled={loading}/>
                <FormGroup label='E-mail' required name='email' type='email' disabled={loading}/>
                <FormGroup label='Password' required name='password' type='password' pattern='.{6,}' disabled={loading}/>
                <div className="mb-3">
                  <Link to='/login'>Sign In</Link>
                </div>
                <button className="btn btn-primary" disabled={loading}>
                  { loading && <span className="spinner-border spinner-border-sm"/> }
                  { loading ? 'Loading...' : 'Register' }
                </button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
