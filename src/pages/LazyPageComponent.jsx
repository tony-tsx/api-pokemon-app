import { lazy, Suspense } from 'react'
import Container from '../components/Container'

const sleep = ( ms ) => new Promise( resolve => {
  setTimeout( resolve, ms )
}, [] )

const LazyCardComponent1 = lazy(
  () => sleep( 2000 )
    .then( () => import( 'http://dom/components/LazyCardComponent1?title="teste"&text="Text"' ) )
)
const LazyCardComponent2 = lazy(
  () => sleep( 3000 )
    .then( () => import( '../components/LazyCardComponent2' ) )
)
const LazyCardComponent3 = lazy(
  () => sleep( 5000 )
    .then( () => import( '../components/LazyCardComponent3' ) )
)

const LazyPageComponent = () => {
  return (
    <Container>
      <Suspense fallback={ <h1>Carregando 1...</h1> }>
        <LazyCardComponent1
          title="Título 1"
          text="Text 1"
          to="some-link-1"
          toText="some text link 1"/>
      </Suspense>
      <Suspense fallback={ <h1>Carregando 2...</h1> } >
        <LazyCardComponent2
          title="Título 2"
          text="Text 2"
          to="some-link-2"
          toText="some text link 2"/>
      </Suspense>
      <Suspense fallback={ <h1>Carregando 3...</h1> }>
        <LazyCardComponent3
          title="Título 3"
          text="Text 3"
          to="some-link-3"
          toText="some text link 3"/>
      </Suspense>
    </Container>
  )
}

export default LazyPageComponent
