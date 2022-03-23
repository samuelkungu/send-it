import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { signup } from "../redux/actions/userActions"
import Validation from "./Validation";

function SignUp() {

  const [user, setUser] = useState({
    userName:"",
    fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
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
                
    
            
    
        <form className=''>
               
                <div className="form-group p-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                     value={user.userName} onChange={handleChange}/>
                     {errors.userName && <p className="error">{errors.userName}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name"
                     value={user.fullName} onChange={handleChange} />
                     {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                      value={user.email}  onChange={handleChange} />
                      {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  
                     value={user.password} onChange={handleChange} />
                     {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"  
                     value={user.confirmPassword} onChange={handleChange} />
                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-1" onSubmit={handleFormSubmit} >
                    Sign Up</button>
                <p className="forgot-password text-right">
                    You already have an account?.
                </p>
                    
            </form>
    </div>
    </div>
</div>)
}

export default SignUp