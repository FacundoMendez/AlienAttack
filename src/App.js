import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import VideoBackground from "./img/videos/backgroundVideoAlien.mp4"
import { Title } from './components/container/Title';
import Container2Scene from './components/container2/Scene';
import EffectMovie from './components/container/EffectMovie';
import Preload from './components/preload/Preload';
import TokenContext from './components/context/TokenContext.js';

function App() {

  const [token, setToken] = useState(1000)

  const usu= "facu"
  useEffect(() => {
    EffectMovie()
  },[])

  return (
    <TokenContext.Provider value={{token, setToken}} >
      <div className="App">
          <Preload />
          <header>
            <Nav />
          </header>
          <main className='main'>

              <div className='container1Title'>
                  <hr className='lineHorizontal'></hr>
                  <hr className='lineVertical'></hr>
                  <Title text="Play"/>
              </div>

              <canvas id="container" className='container'> </canvas>

              <div className='container1'>
                  <video src={VideoBackground} autoPlay loop muted ></video>
              </div>
              <Container2Scene/>
          </main>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
