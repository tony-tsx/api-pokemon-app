import { useMemo } from "react"
import useClassNames from "../hooks/useClassNames"

const Button = ( { primary, secondary, className, ...props } ) => {
  const defaultClasses = useMemo( () => {
    return {
      btn: true,
      [`btn-primary`]: primary,
      [`btn-secondary`]: secondary,
    }
  }, [ secondary, primary ] )

  const allClassesNames = useClassNames( defaultClasses, className )

  return <button className={allClassesNames} {...props} />
}

export default Button
