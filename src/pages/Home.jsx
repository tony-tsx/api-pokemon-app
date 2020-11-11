import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Row from '../components/Row'

const Home = () => {
  return (
    <Container className='shadow-lg bg-white'>
      <Row>
        <div className="col">
          <h1>Hello World. I'am home</h1>
        </div>
      </Row>
      <div className="row">
        <div className="col">
          <Link to="/login" className='btn btn-primary'>Login</Link>
        </div>
      </div>
    </Container>
  )
}

export default Home
