import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Forgotpass from "./pages/Forgotpass";
import Changepasspage from "./pages/Changepasspage";

function App() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    return(
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>}/>
          <Route path="/forgotpass" element={<Forgotpass/>} />
          <Route path="/changepass" element={<Changepasspage/>} />
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }/>
        </Routes>
      </div>
    );
}

export default App;
