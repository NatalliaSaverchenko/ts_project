import { NavLink } from 'react-router-dom'
import { ROUTE_NAMES } from '../../routes/routeNames'
export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        minWidth: '500px',
        marginBottom: '40px',
      }}
    >
      {Object.entries(ROUTE_NAMES).map(([title, pathTo]) => {
        return (
          <NavLink to={pathTo} key={title}>
            {title}
          </NavLink>
        )
      })}
    </div>
  )
}
