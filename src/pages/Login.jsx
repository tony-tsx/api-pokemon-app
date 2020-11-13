import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Col from '../components/Col'
import Container from '../components/Container'
import FormGroup from '../components/FormGroup'
import Row from '../components/Row'

const Login = () => {
  return (
    <Container className='h-100'>
      <Row className='align-items-center justify-content-center h-100'>
        <Col sm={10} md={8} lg={6} xl={5}>
          <Card>
            <Card.Body>
              <Card.Title>Sign In</Card.Title>
              <form>
                <FormGroup label='E-mail' name='email' type='email' />
                <FormGroup label='Password' name='password' type='password' />
                <div className="mb-3">
                  <Link to='/register'>Sign Up</Link>
                </div>
                <button className="btn btn-primary">
                  Sign In
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
