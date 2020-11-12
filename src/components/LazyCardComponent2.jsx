import Card from "./Card"

const LazyCardComponent = ( props ) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{props.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link to={props.to}>{props.toText}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default LazyCardComponent
