import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hello World. I'am home</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/login" className='btn btn-primary'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
