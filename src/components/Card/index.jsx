import useClassNames from '../../hooks/useClassNames'
import CardBody from './Body'
import CardFooter from './Footer'
import CardHeader from './Header'
import CardLink from './Link'
import CardSubtitle from './Subtitle'
import CardText from './Text'
import CardTitle from './Title'

const Card = ( { className, ...props } ) => {
  return (
    <div className={useClassNames( 'card', className )} {...props}/>
  )
}

Card.Body = CardBody
Card.Header = CardHeader
Card.Footer = CardFooter
Card.Link = CardLink
Card.Subtitle = CardSubtitle
Card.Text = CardText
Card.Title = CardTitle

export default Card
