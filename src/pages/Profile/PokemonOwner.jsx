const { useState, useEffect, useMemo } = require("react")
const { default: Col } = require("../../components/Col")
const { default: ErrorMessage } = require("../../components/ErrorMessage")
const { default: pokemonApi } = require("../../services/pokemonApi")

const PokemonOwner = ( { id } ) => {
  const [ pokemon, setPokemon ] = useState( null )
  const [ error, setError ] = useState( null )
  const [ loading, setLoading ] = useState( false )

  useEffect( () => {
    setLoading( true )
    pokemonApi.get( `/pokemon/${id}` )
      .then( response => setPokemon( response.data ) )
      .catch( reason => setError( reason ) )
      .finally( () => setLoading( false ) )
  }, [ id ] )

  const sprite = useMemo( () => pokemon?.sprites?.front_shiny, [ pokemon ] )

  return (
    <Col sm={6} md={4} lg={3} xl={2}>
      { error && <ErrorMessage error={error} /> }
      { loading && <h6>Carregando...</h6> }
      { pokemon && (
        <div>
          <div style={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <img src={sprite} alt=''></img>
          </div>
          <div>
            <h6 style={ { textAlign: 'center' } }>{pokemon.name}</h6>
          </div>
        </div>
      ) }
    </Col>
  )
}

export default PokemonOwner
