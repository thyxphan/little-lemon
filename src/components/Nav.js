import { Link } from 'react-router-dom';
import logo from "../assets/little-lemon.png";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/booking">Reserve</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      <div>
        <img src={logo} alt="Little Lemon Logo" style={{ height: '100px' }} />
      </div>
    </nav>
  );
}

export default Nav;
