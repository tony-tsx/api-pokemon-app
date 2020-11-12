import useClassNames from '../../hooks/useClassNames'

const CardFooter = ( { children, className } ) => {
  return (
    <div className={useClassNames( 'card-footer', className )}>
      {children}
    </div>
  )
}

export default CardFooter
