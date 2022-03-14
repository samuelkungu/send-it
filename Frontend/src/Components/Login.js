import React, { useState } from 'react';
import './css/global.css';
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
  }

  return (
       <div>
        <NavBar/>
        <div className='Login'>
        <form >
            <input type="text"
            autoFocus  
            value={email} 
            name="email"
            placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)} />

            <input type="text" 
            value={password} 
            name="password"
            placeholder="Enter your Password..."  
            onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSubmit} className="btn btn-primary" disabled={!validateForm()}> Login </button>

            
        </form>

    </div>
    </div>
  )
}

export default Login;
