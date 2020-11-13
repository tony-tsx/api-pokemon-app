import Col from '../components/Col'
import Container from '../components/Container'
import Row from '../components/Row'
import { useSelector } from 'react-redux'
import Identicon from '../components/Identicon'
import Card from '../components/Card'

const Profile = () => {
  const user = useSelector( state => state.user )

  return (
    <Container className="h-100">
      <Row className="h-100 justify-content-center">
        <Col sm={10} md={8} lg={6}>
          <Card className="mt-5">
            <Card.Body>
              <Row>
                <Col size={2}>
                  <Identicon string={user.nick} size={80}/>
                </Col>
                <Col>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle>{user.nick} / {user.email}</Card.Subtitle>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
