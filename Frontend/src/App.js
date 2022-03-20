import './App.css';
// import './Components/UI/css/main.css'
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/UI/Home';
import Login from './Components/UI/Login';
import Register from './Components/UI/Register';
import ParcelTracking from './Components/UI/ParcelTracking';
import Contact from './Components/UI/Contact';
import CreateParcel from './Components/UI/CreateParcel';
import NavBar from './Components/UI/NavBar';
import About from './Components/UI/About';


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
