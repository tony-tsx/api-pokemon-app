import { useMemo } from "react"
import useClassNames from "../hooks/useClassNames"

const Col = ( { children, size, sm, md, lg, xl, className, ...props } ) => {
  const c = useMemo( () => {
    if ( !( size || sm || md || lg || xl ) ) return 'col'
    return {
      [`col-${size}`]: !!size,
      [`col-sm-${sm}`]: !!sm,
      [`col-md-${md}`]: !!md,
      [`col-lg-${lg}`]: !!lg,
      [`col-xl-${xl}`]: !!xl,
    }
  }, [ size, sm, md, lg, xl ] )

  const allClassNames = useClassNames( c, className )

  return (
    <div className={allClassNames} {...props}>
      {children}
    </div>
  )
}

export default Col
