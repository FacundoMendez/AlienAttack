import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import VideoBackground from "./img/videos/Fondo Gris Oscuro Alien.mp4"
import { Title } from './components/nav/container/Title';
import ButtonLarge from './components/Button.jsx/ButtonLarge';

function App() {
  return (
    <div className="App">
        <header>
          <Nav />
        </header>
        <main className='main'>
            <div className='container'>
              <video src={VideoBackground} autoPlay loop muted ></video>
              <hr className='lineHorizontal'/>
              <hr className='lineVertical'/>
              <Title text="Play"/>
            </div>

            <div className='container2'>

            </div>
        </main>
    </div>
  );
}

export default App;
