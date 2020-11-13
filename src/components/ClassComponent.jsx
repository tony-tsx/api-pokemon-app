import { Component } from 'react'

class ClassComponent extends Component {
  state = { error: null }
  static getDerivedStateFromError( error ) {
    return { error }
  }

  render() {
    if ( this.state.error ) return <h1>Algum Erro Aconteceu</h1>
    return (
      <>
        {this.props.children}
      </>
    )
  }
}

export default ClassComponent
