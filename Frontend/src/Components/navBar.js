import React from 'react'
import { Link} from 'react-router-dom';

function NavBar() {
  return (
 
    <nav className="navbar navbar-expand-lg bkg-dark navbar-dark fixed-top ">
        <div className="container">
        <ul className="navbar-nav ml-auto ">
            <li className="nav-item ">
                    <Link className="nav-link" to={"/Home"}>Home</Link>
            </li>
        </ul>
        <ul className='navbar-nav navbar-right '> 
            <li className="nav-item">
                    <Link className="nav-link" to={"/Login"}>Login</Link>
            </li>
            <li className="nav-item ">
                    <Link className="nav-link" to={"/Register"}>Register</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default NavBar;