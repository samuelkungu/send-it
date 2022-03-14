import React from 'react';
import './css/global.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return (
    <div className='container'>
        <form >
            <input type="text"  
            value={email} 
            name="email"
            placeholder="Enter your Email..."
             onChange={(e) => setEmail(e.target.value)} />

            <input type="text" 
            value={password} 
            name="password"
            placeholder="Enter your Password..."  
            onChange={(e) => setPassword(e.target.value)} />
            
            <button onClick="" className="btn btn-primary"> Login </button>

            
        </form>

    </div>
  )
}

export default Login;
