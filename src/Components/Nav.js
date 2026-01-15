import "./Nav.css";
// page not reloading on navigation - use Link or NavLink
import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo">logo</a>
        <ul>
          <li>
            {/* Use NavLink to apply active class */}
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
