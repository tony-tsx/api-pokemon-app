import useClassNames from '../../hooks/useClassNames'

const CardSubtitle = ( { children, className } ) => {
  return (
    <h6 className={useClassNames( 'card-subtitle', className )}>
      {children}
    </h6>
  )
}

export default CardSubtitle
