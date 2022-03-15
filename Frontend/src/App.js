import './App.css';
import { BrowserRouter,Routes,  Route, } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ParcelTracking from './Components/ParcelTracking';
import Services from './Components/Services';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/ParcelTracking' element={<ParcelTracking/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/LoginPage' element={<Login/>} />
      <Route path="/RegisterPage" element={<Register/>} />

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
