import useClassNames from '../../hooks/useClassNames'

const CardHeader = ( { children, className } ) => {
  return (
    <div className={useClassNames( 'card-header', className )}>
      {children}
    </div>
  )
}

export default CardHeader
