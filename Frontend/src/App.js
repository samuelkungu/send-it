import './App.css';
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import ParcelTracking from './Components/pages/ParcelTracking';
import Contact from './Components/pages/Contact';
import CreateParcel from './Components/pages/CreateParcel';
import NavBar from './Components/pages/NavBar';
import About from './Components/pages/About';


function App() {
  return (
    
    <BrowserRouter>
    < NavBar/>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/CreateParcel' element={<CreateParcel/>} />
      <Route path='/ParcelTracking' element={<ParcelTracking/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/LoginPage' element={<Login/>} />
      <Route path="/RegisterPage" element={<Register/>} />

      

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
