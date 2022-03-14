import './App.css';
import { BrowserRouter,Routes,  Route, } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
