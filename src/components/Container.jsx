import useClassNames from '../hooks/useClassNames'

const Container = ( { children, className } ) => {
  return (
    <div className={useClassNames( 'container', className )}>
      {children}
    </div>
  )
}

export default Container
