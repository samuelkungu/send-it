import './App.css';
import { BrowserRouter,Routes,  Route, } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="auth-wrapper">
    <div className="auth-inner">
    <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
    </BrowserRouter>
      </div>
  </div>
  );
}

export default App;
