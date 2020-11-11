import { useMemo } from 'react'
import classnames from 'classnames'

const useClassNames = ( className1, className2 ) => {
  const allClassNames = useMemo( () => {
    return classnames( className1, className2 )
  }, [ className1, className2 ] )

  return allClassNames
}

export default useClassNames
