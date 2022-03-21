import React, { useState } from 'react'

function RegisterView() {  
      // States for registration
      const [fullname, setFullName] = useState('');
      const [username, setUserName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
     
      // States for checking the errors
      const [submitted, setSubmitted] = useState(false);
      const [error, setError] = useState(false);
     
      // Handling the name change
      const handleFullName = (e) => {
        setFullName(e.target.value);
        setSubmitted(false);
      };
      const handleUserName = (e) => {
        setUserName(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the email change
      const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the password change
      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };
     
      // Handling the form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        if (fullname === '' ||username === '' || email === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
      };
      // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {username} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
     
    return (
        <div className='page '>
   
    <div className="wrapper">
    <div className="inner">
                
            <div className="messages">
                        {errorMessage()}
                        {successMessage()}
            </div>
    
        <form className=''>
               
                <div className="form-group p-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" onChange={handleUserName} value={username} />
                </div>
                <div className="form-group p-2">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" onChange={handleFullName} value={fullname} />
                </div>
                <div className="form-group p-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail} value={email} />
                </div>
                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={handlePassword} value={password} />

                </div>
                <button type="submit" className="btn btn-primary btn-block mt-1" onSubmit={handleSubmit} >
                    Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/LoginPage">Sign in?</a>
                </p>
            </form>
    </div>
    </div>
</div>)
}

export default RegisterView