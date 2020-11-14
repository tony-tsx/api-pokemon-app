import useClassNames from '../../hooks/useClassNames'

const CardTitle = ( { children, className, ...props } ) => {
  return (
    <h5 className={useClassNames( 'card-title', className )} {...props}>
      {children}
    </h5>
  )
}

export default CardTitle
