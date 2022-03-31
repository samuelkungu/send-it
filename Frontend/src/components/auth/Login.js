import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../layout/Alert";

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();

		login(email, password);
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Navigate to="/dashboard" />;
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
          autoFocus  value={email}  onChange={(e) => onChange(e)} />
        </div>
  
        <div className="form-group p-2 ">
          <label>Password</label>
          <input  type="password" className="form-control " placeholder="Enter password" name="password" 
          value={password} onChange={(e) => onChange(e)} />
        </div>
  
        <div className="form-group p-2 ">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label>Remember me</label>
        </div>
  
        <button button type="submit" className="btn btn-primary btn-block"
          onClick={onSubmit}> Login </button>
          <p className="forgot-password text-right"> 
                  
                     Forgot Password?.
                 
                 
                  
            <a href="/RegisterPage">Register?</a>  
          </p>
  
          
      </form>
  
      </div>
      </div>
      </div>
      </div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
