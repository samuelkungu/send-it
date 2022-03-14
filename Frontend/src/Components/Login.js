import React, { useState } from 'react';
import './css/main.css'
import NavBar from './NavBar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length >0 && password.length >0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`The email you entered was: ${email}`)
  }

  return (
      
        <div className="wrapper">
        <div className="inner">
        <NavBar/>
        <div className="Login">
        <form>
        <div className="form-group">
            <label>Email address</label>
            <input type="email"  className="form-control" placeholder="Enter email"  name="email"
            autoFocus   value={email}  onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input  type="password" className="form-control " placeholder="Enter password" name="password" 
            value={password}  onChange={(event) => setPassword(event.target.value)} />
        </div>

        <div className="form-group">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label>Remember me</label>
        </div>

            <button button type="submit" className="btn btn-primary btn-block "
            onClick={handleSubmit} disabled={!validateForm()}> Login </button>

            
        </form>
      </div>
      </div>
    </div>
    
  )
}

export default Login;
