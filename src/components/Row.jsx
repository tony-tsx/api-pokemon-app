import useClassNames from "../hooks/useClassNames"

const Row = ( { children, className } ) => {
  return (
    <div className={useClassNames( 'row', className )}>
      {children}
    </div>
  )
}

export default Row
