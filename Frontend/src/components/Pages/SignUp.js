import React, { useState, useEffect } from "react"

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../actions/auth";
import { setAlert } from "../actions/alert";

const SignUp =() =>{

  const [formData, setFormData] = useState({
    userName:"",
    fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const { userName, fullName , email, password, confirmPassword } = formData;
  
  const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
    

  const onSubmit = async (e) => {
		console.log("Form data", e);
		e.preventDefault();
		if (password !== confirmPassword) {
			setAlert("Password do not match", "danger");
		} else {
			register({ userName, fullName , email, password });
		}
	};


  const [errors, setErrors] = useState({});
    return (
    <div className='page '>
   
    <div className="wrapper">
    <div className="inner">
                
    
            
    
        <form className=''>
               
                <div className="form-group p-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" name="userName"
                     value={userName} onChange={(e) => onChange(e)}/>
                     {errors.userName && <p className="error">{errors.userName}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" name="fullName"
                     value={fullName} onChange={(e) => onChange(e)} />
                     {errors.fullName && <p className="error">{errors.fullName}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"
                      value={email}  onChange={(e) => onChange(e)}   />
                      {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" 
                     value={password} onChange={(e) => onChange(e)} />
                     {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div className="form-group p-2">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" 
                     value={confirmPassword} onChange={(e) => onChange(e)} />
                     {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-1" onSubmit={(e) => onSubmit(e)} >
                    Sign Up</button>
                <p className="forgot-password text-right">
                    You already have an account?.
                </p>
                    
            </form>
    </div>
    </div>
</div>);
};



SignUp.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);


