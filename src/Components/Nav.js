import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo">logo</a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
