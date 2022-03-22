import './App.css';
// import './Components/css/main.css'
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ParcelTracking from './Components/ParcelTracking';
import Contact from './Components/Contact';
import CreateParcel from './Components/CreateParcel';
import NavBar from './Components/NavBar';
import About from './Components/About';


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
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />

      

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
