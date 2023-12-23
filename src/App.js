import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Login from "./log_in/Login";

const App = () => {

  useEffect(() => {
     localStorage.clear();
  }, []);
  const isLoggedIn = !!localStorage.getItem('token')
  const [login, setLogin] = useState(isLoggedIn)

  return (
    <Router>  
      <div>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Login login={login} setLogin={setLogin} />} />
            <Route path="/home" element={<Home login={login}/>} />
            <Route path="/cart" element={<Cart login={login}/>} />
          </Routes>
        
      </div>
    </Router>
  );
};

export default App;
