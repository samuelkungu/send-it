import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";

const Register = ({ setAlert, register, isAuthenticated }) => {
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

	// Redirect if logged in
	if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
	}

	return (
<div className='page '>
   
   <div className="wrapper">
   <div className="inner">
			   
   
		   
   
	   <form className=''>
			  
			   <div className="form-group p-2">
				   <label>Username</label>
				   <input type="text" className="form-control" placeholder="Username" name="userName"
					value={userName} onChange={(e) => onChange(e)}/>
			   </div>
			   <div className="form-group p-2">
				   <label>Full name</label>
				   <input type="text" className="form-control" placeholder="Full name" name="fullName"
					value={fullName} onChange={(e) => onChange(e)} />
			   </div>
			   <div className="form-group p-2">
				   <label>Email address</label>
				   <input type="email" className="form-control" placeholder="Enter email" name="email"
					 value={email}  onChange={(e) => onChange(e)}   />
			   </div>
			   <div className="form-group p-2">
				   <label>Password</label>
				   <input type="password" className="form-control" placeholder="Enter password" name="password" 
					value={password} onChange={(e) => onChange(e)} />
			   </div>
			   <div className="form-group p-2">
				   <label>Confirm Password</label>
				   <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" 
					value={confirmPassword} onChange={(e) => onChange(e)} />
					
			   </div>

			   <button type="submit" className="btn btn-primary btn-block mt-1" onClick={(e) => onSubmit(e)} >
				   Sign Up</button>
			   <p className="forgot-password text-right">
				   You already have an account?.
			   </p>
				   
		   </form>
   </div>
   </div>
</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
