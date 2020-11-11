import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hello World. I'am login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/" className='btn btn-primary'>Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
