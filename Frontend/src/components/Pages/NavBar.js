import React from 'react'
import { Link} from 'react-router-dom';

function NavBar() {
  return (
 
    <nav className="navbar navbar-light">
      <h4 className='ms-4 mt-2'>Send It</h4>
        <div className="container  navbar-expand-lg  ">
        <ul className="navbar-nav ml-auto ">
            <li className="nav-item ">
                    <Link className="nav-link active" to={"/"}>Home</Link>
            </li>
            
            <li className="nav-item ">
                    <Link className="nav-link" to={"/CreateParcel"}>Create Parcel</Link>
            </li>

            <li className="nav-item ">
                    <Link className="nav-link" to={"/ParcelTracking"}>Parcel Tracking</Link>
            </li>

            <li className="nav-item ">
                    <Link className="nav-link" to={"/About"}>About</Link>
            </li>

            <li className="nav-item ">
                    <Link className="nav-link" to={"/Contact"}>Contact Us</Link>
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