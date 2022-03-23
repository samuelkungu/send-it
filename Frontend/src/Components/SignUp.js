import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { signup } from "../redux/actions/userActions"

function SignUp() {

  const [userData, setUserData] = useState({
    username : " ",
    fullName : " ",
    email : " ",
    password : " ",
    username : " ",
    confirmPassword : " ",
  });
  

  // const { loading, error, userInfo } = useSelector((state) => state.useRegister)

  //   const dispatch = useDispatch();
  const handleChange = ( event ) =>{
      setUserData({
        ...userData , 
        [event.target.name]: event.target.userData,
      });
    };

  const [errors, setErrors] = useState({});
  const  handleFormSubmit = ( event ) => {
    event.preventDefault();
  };


     
    return (
    <div className='page '>
   
    <div className="wrapper">
    <div className="inner">
                
    
            
    
        <form className=''>
               
                <div className="form-group p-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                     value={userData.userName} onChange={handleChange}/>
                </div>
                <div className="form-group p-2">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name"
                     value={userData.fullName} onChange={handleChange} />
                </div>
                <div className="form-group p-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                      value={userData.email}  onChange={handleChange} />
                </div>
                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  
                     value={userData.password} onChange={handleChange} />
                </div>
                <div className="form-group p-2">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"  
                     value={userData.confirmPassword} onChange={handleChange} />
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