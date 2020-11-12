import useClassNames from '../../hooks/useClassNames'

const CardTitle = ( { children, className } ) => {
  return (
    <h5 className={useClassNames( 'card-title', className )}>
      {children}
    </h5>
  )
}

export default CardTitle
