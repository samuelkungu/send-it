import React, {useState } from 'react'
import {useDispatch} from "react-redux"

import { login } from "../redux/actions/userActions"

function SignIn() {
    
    // const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault()
    //   dispatch(login(email, password))
    }
  
    function validateForm() {
      return email.length >0 && password.length >0;
    }
  
  
      return (
  
      <div className='page '>
      <div className="wrapper">
      <div className="inner">
      <div className="Login">
     
             
  
      <form>
        <div className="form-group p-2 ">
          <label>Email address</label>
          <input type="email"  className="form-control" placeholder="Enter email"  name="email"
          autoFocus   value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
  
        <div className="form-group p-2 ">
          <label>Password</label>
          <input  type="password" className="form-control " placeholder="Enter password" name="password" 
           value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
  
        <div className="form-group p-2 ">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label>Remember me</label>
        </div>
  
        <button button type="submit" className="btn btn-primary btn-block"
          onClick={handleSubmit} disabled={!validateForm()}> Login </button>
          <p className="forgot-password text-right"> 
                  
                     Forgot Password?.
                 
                 
                  
            <a href="/RegisterPage">Register?</a>  
          </p>
  
          
      </form>
  
      </div>
      </div>
      </div>
      </div>)
  }
  
  
  export default SignIn;