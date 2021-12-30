import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../../routes/routeNames'
export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '300px',
        marginBottom: '40px',
      }}
    >
      {Object.entries(ROUTE_NAMES).map(([title, pathTo]) => {
        return <NavLink to={pathTo}>{title}</NavLink>
      })}
    </div>
  )
}
