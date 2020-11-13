import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import Card from '../components/Card'

const Home = () => {
  return (
    <Container>
      <Row className='pt-5'>
        <h2>Escolha seu inicial</h2>
      </Row>
      <Row>
        <Col sm={12} md={8} lg={4}>
          <Card style={ { cursor: 'pointer', backgroundColor: 'green' } }>
            <Card.Body>
              <Card.Title>
                Bulbasaur
              </Card.Title>
              <Card.Text>
                Bulbasaur is great pokémon
              </Card.Text>
              <Card.Link to='/pokemon/bulbasaur'>See more</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={8} lg={4}>
          <Card style={ { cursor: 'pointer', backgroundColor: 'red' } }>
            <Card.Body>
              <Card.Title>
                Charmander
              </Card.Title>
              <Card.Text>
                Charmander is great pokémon
              </Card.Text>
              <Card.Link to='/pokemon/charmander'>See more</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={8} lg={4}>
          <Card style={ { cursor: 'pointer', backgroundColor: 'blue' } }>
            <Card.Body>
              <Card.Title>
                Squirtle
              </Card.Title>
              <Card.Text>
                Squirtle is perfect pokémon
              </Card.Text>
              <Card.Link to='/pokemon/squirtle'>See more</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
