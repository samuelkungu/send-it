import React from 'react'
import { Link} from 'react-router-dom';
import './css/navbar.css';

function NavBar() {
  return (
 
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <ul>
            <li className="nav-item">
                    <Link className="nav-link" to={"/Home"}>Home</Link>
            </li>
            <li className="nav-item">
                    <Link className="nav-link" to={"/Login"}>Login</Link>
            </li>
            <li className="nav-item">
                    <Link className="nav-link" to={"/Register"}>Register</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default NavBar;