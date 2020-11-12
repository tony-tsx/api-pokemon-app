import useClassNames from '../../hooks/useClassNames'
import { Link } from 'react-router-dom'
const CardLink = ( { children, className, to } ) => {
  return (
    <Link to={to} className={useClassNames( 'card-link', className )}>
      {children}
    </Link>
  )
}

export default CardLink
