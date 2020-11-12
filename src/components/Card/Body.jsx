import useClassNames from '../../hooks/useClassNames'

const CardBody = ( { children, className } ) => {
  return (
    <div className={useClassNames( 'card-body', className )}>
      {children}
    </div>
  )
}

export default CardBody
