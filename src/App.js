import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import Home from './components/home/Home';
import Nav from "./components/nav/Nav";
import User from './components/user/User';
import Login from "./components/login/Login"
import TokenContext from './components/context/TokenContext.js'; 
import CursorCustom from './components/cursor/CursorCustom';


function App() {

  const [token, setToken] = useState(1000)
  const [confirmationBuy, setConfirmationBuy] = useState(false)
  const [titleHome, setTitleHome] = useState(true)

  const [emailx, setEmailx] = useState(" ")
  const [passwordx, setPasswordx] = useState(" ")
  const [idUser, setIdUser] = useState(" ")
  const [fyh, setFyh] = useState(" ")


  return (
    <BrowserRouter  forceRefresh={true}>

        <TokenContext.Provider value={{
          token, setToken, 
          confirmationBuy, setConfirmationBuy, 
          titleHome, setTitleHome, 
          setEmailx, emailx,
          passwordx, setPasswordx,
          idUser, setIdUser,
          fyh, setFyh
          }} >

          <CursorCustom/>
          <Nav />

          <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/user'  element={<User /> } />
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Navigate to="/" />}/>
          </Routes>

        </TokenContext.Provider>
    </BrowserRouter>
    
  )
  

}

export default App;
