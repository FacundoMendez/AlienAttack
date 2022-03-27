import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import VideoBackground from "./img/videos/Fondo Gris Oscuro Alien.mp4"
import { Title } from './components/container/Title';
import Container2Scene from './components/container2/Scene';
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
            
            <Container2Scene/>
        </main>
    </div>
  );
}

export default App;
