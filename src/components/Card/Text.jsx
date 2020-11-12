import useClassNames from '../../hooks/useClassNames'

const CardText = ( { children, className } ) => {
  return (
    <p className={useClassNames( 'card-text', className )}>
      {children}
    </p>
  )
}

export default CardText
