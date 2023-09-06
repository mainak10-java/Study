import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    return(
      <div>
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    );
}

export default App;
