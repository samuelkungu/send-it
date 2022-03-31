import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter,Routes, Route, } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Pages/Home';
import ParcelTracking from './components/Pages/ParcelTracking';
import Contact from './components/Pages/Contact';
import CreateParcel from './components/Pages/CreateParcel';
import NavBar from './components/Pages/NavBar';
import About from './components/Pages/About';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/auth";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";



if (localStorage.token) {
	setAuthToken(localStorage.token);
}
function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
  return (
    
    <BrowserRouter>
    < NavBar/>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/CreateParcel' element={<CreateParcel/>} />
      <Route path='/ParcelTracking' element={<ParcelTracking/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path="/Register" element={<Register/>} />

      

    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
