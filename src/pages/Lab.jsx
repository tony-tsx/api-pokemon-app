import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import Card from '../components/Card'
import Col from '../components/Col'
import Container from '../components/Container'
import ErrorMessage from '../components/ErrorMessage'
import Row from '../components/Row'
import { POKEMON_TYPE_COLORS } from '../constants/colors'
import useLoginRedirectEffect from '../hooks/useLoginRedirectEffect'
import api from '../services/api'
import pokemonApi from '../services/pokemonApi'

const Lab = () => {
  const [ avaiblePokemons, setAvaiblePokemons ] = useState( [] )
  const [ loading, setLoading ] = useState( false )
  const [ error, setError ] = useState( null )
  const [ pokemon, setPokemon ] = useState( null )
  const user = useSelector( state => state.user )

  const choosePokemon = useCallback( ( pokemon ) => {
    setPokemon( pokemon )
  }, [] )

  const saveChoosePokemon = useCallback( () => {
    if ( !pokemon ) return setError( new Error( 'Choose your pokemon' ) )
    setLoading( true )
    api.patch( `/users/${user.id}`, { pokemons: [ pokemon.id ] } )
      .then( ( response ) => {
        console.log( response )
      } )
      .catch( setError )
      .finally( () => setLoading( false ) )
  }, [ pokemon, user ] )

  useEffect( () => {
    if ( !user ) return void 0
    setLoading( true )
    api.get( '/initialPokemonsIds' )
      .then( async response => {
        const promises = response.data.map( ( { id } ) => pokemonApi.get( `/pokemon/${id}` ) )
        return Promise.all( promises )
          .then( ( responses ) => responses.map( response => response.data ) )
      } )
      .then( pokemons => setAvaiblePokemons( pokemons ) )
      .catch( setError )
      .finally( () => setLoading( false ) )
  }, [ user ] )

  useEffect( () => {
    if ( error ) {
      const timeout = setTimeout( () => setError( null ), 3000 )
      return () => clearTimeout( timeout )
    }
  }, [ error ] )

  if ( useLoginRedirectEffect() ) return null

  return (
    <Container className="h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Col size={10}>
          <Card>
            <Card.Body>
              <Card.Title>
                Escolha seu pokémon { loading ? '( Carregando... )' : '' }
              </Card.Title>
              <hr></hr>
              { error && <ErrorMessage error={error} /> }
              <Row>
                { avaiblePokemons.map( avaiblePokemon => <PokemonChoose
                    onChoosePokemon={choosePokemon}
                    pokemon={avaiblePokemon}
                    active={pokemon === avaiblePokemon}
                  /> ) }
              </Row>
              <Button primary className="mt-3" onClick={saveChoosePokemon}>Choose</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

const PokemonChoose = ( { pokemon, onChoosePokemon, active } ) => {
  const primaryType = useMemo( () => pokemon.types[0].type, [ pokemon.types ] )
  const primaryTypeColor = useMemo( () => {
    const colorName = primaryType.name.toUpperCase()
    return POKEMON_TYPE_COLORS[colorName]
  }, [ primaryType ] )
  const primaryTypeColorWithAlpha = useMemo( () => `${primaryTypeColor}70`, [ primaryTypeColor ] )
  const spriteUrl = useMemo( () => pokemon.sprites.front_default, [ pokemon.sprites.front_default ] )

  const handlerClick = useCallback( () => {
    onChoosePokemon( pokemon )
  }, [ onChoosePokemon, pokemon ] )

  return (
    <Col style={ { opacity: active ? '' : '0.7' } }>
      <Card style={{ cursor: 'pointer', backgroundColor: primaryTypeColorWithAlpha }} onClick={handlerClick}>
        <Card.Body>
          <div style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <img src={spriteUrl} alt=''></img>
          </div>
          <Card.Title style={ { color: primaryTypeColor, textTransform: 'capitalize' } }>
            {pokemon.name}
          </Card.Title>
          <hr/>
          <Row className='no-gutters'>
            { pokemon.types.map( ( { type } ) => {
              const color = POKEMON_TYPE_COLORS[type.name.toUpperCase()]
              const colorWithAlpha = `${color}70`
              const style = {
                backgroundColor: colorWithAlpha,
                padding: '5px 10px',
                margin: '0 5px',
                borderRadius: '5px',
                border: `1px solid ${color}`,
                textTransform: 'capitalize'
              }
              return <span style={ style }>{type.name}</span>
            } ) }
          </Row>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Lab
