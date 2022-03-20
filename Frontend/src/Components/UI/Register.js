import React from 'react'
function RegisterView() {

  
    return (
        <div className='page '>
   
    <div className="wrapper">
    <div className="inner">
    
        <form className=''>
               
                <div className="form-group p-2">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group p-2">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" />
                </div>
                <div className="form-group p-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group p-2">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />

                </div>
                <button type="submit" className="btn btn-primary btn-block mt-1">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/LoginPage">Sign in?</a>
                </p>
            </form>
    </div>
    </div>
</div>)
}

export default RegisterView;
