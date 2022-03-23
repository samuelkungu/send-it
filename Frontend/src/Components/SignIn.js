import React, {useState } from 'react'
import {useDispatch} from "react-redux"
import { login } from "../redux/actions/userActions"
import Validation from './Validation';

function SignIn() {
    
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  

  // const { loading, error, userInfo } = useSelector((state) => state.useRegister)

  //   const dispatch = useDispatch();
  const handleChange = ( event ) =>{
      setUser({
        ...user , 
        [event.target.name]: event.target.user,
      });
    };

  const [errors, setErrors] = useState({});

  const  handleFormSubmit = ( event ) => {
    event.preventDefault();
    setErrors(Validation(user));
  };
  
  
      return (
  
      <div className='page '>
      <div className="wrapper">
      <div className="inner">
      <div className="Login">
     
             
  
      <form>
        <div className="form-group p-2 ">
          <label>Email address</label>
          <input type="email"  className="form-control" placeholder="Enter email"  name="email"
          autoFocus  value={user.email}  onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
  
        <div className="form-group p-2 ">
          <label>Password</label>
          <input  type="password" className="form-control " placeholder="Enter password" name="password" 
          value={user.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
  
        <div className="form-group p-2 ">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label>Remember me</label>
        </div>
  
        <button button type="submit" className="btn btn-primary btn-block"
          onClick={handleFormSubmit}> Login </button>
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