import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { signup } from "../redux/actions/userActions"

function SignUp() {

  const [userName, setUserName] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(null)

  // const { loading, error, userInfo } = useSelector((state) => state.useRegister)

//   const dispatch = useDispatch();
  const dispatch = email;
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setPasswordsNotMatch("Passwords Not Match!")
    } else {
      
      dispatch(signup(userName, fullName, email, password))
    }
  } 


     
    return (
    <div className='page '>
   
    <div className="wrapper">
    <div className="inner">
                
    
            
    
        <form className=''>
               
                <div className="form-group p-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                     value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="form-group p-2">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name"
                     value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-group p-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  
                     value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group p-2">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password"  
                     value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-1" onSubmit={handleSubmit} >
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