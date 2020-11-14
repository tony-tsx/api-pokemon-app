import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Col from '../../components/Col'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Identicon from '../../components/Identicon'
import Card from '../../components/Card'
import PokemonOwner from './PokemonOwner'
import useLoginRedirectEffect from '../../hooks/useLoginRedirectEffect'

const Profile = () => {
  const user = useSelector( state => state.user )

  if ( useLoginRedirectEffect() ) return null

  return (
    <Container className="h-100">
      <Row className="h-100 justify-content-center">
        <Col sm={10} md={8} lg={6}>
          <Card className="mt-5">
            <Card.Body>
              <Row>
                <Col sm={12} md={3} lg={2}>
                  <Identicon string={user.nick} size={80}/>
                </Col>
                <Col>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle>{user.nick} / {user.email}</Card.Subtitle>
                </Col>
              </Row>
              <Row className='my-3'>
                <Col>
                  <h3>Insígnias</h3>
                  <hr/>
                  { user.insignias ? ( user.insignias.map( insignia => <span></span> ) ) : <h5>Você não possui nenhum insígnia</h5> }
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Pokémons</h3>
                  <hr/>
                  { user.pokemons
                    ? ( user.pokemons.map( pokemon => <PokemonOwner id={pokemon}/> ) )
                    : (
                      <div>
                        <h5>Você não possui nenhum pokémon</h5>
                        <Link to='/lab'>Vá para o lab escolher o seu primeiro</Link>
                      </div>
                    ) }
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Zonas de captura</h3>
                  <hr/>
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
