import './App.css';
import { BrowserRouter,Routes,  Route, } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/LoginPage' element={<Login/>} />
      <Route path="/RegisterPage" element={<Register/>} />

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
