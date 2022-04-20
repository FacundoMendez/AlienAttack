import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import Home from './components/home/Home';
import Nav from "./components/nav/Nav";
import User from './components/user/User';
import Login from "./components/login/Login"
import TokenContext from './components/context/TokenContext.js'; 


function App() {

  const [token, setToken] = useState(1000)
  const [confirmationBuy, setConfirmationBuy] = useState(false)
  const [titleHome, setTitleHome] = useState(true)

  return (
    <BrowserRouter  forceRefresh={true}>
        <TokenContext.Provider value={{token, setToken, confirmationBuy, setConfirmationBuy, titleHome, setTitleHome}} >
          <Nav />

          <Routes >
            <Route path='/user'  element={<User /> } />
            <Route path='/login' element={<Login />}/>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Navigate to="/" />}/>
          </Routes>

        </TokenContext.Provider>
    </BrowserRouter>
  )
}

export default App;
