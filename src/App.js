import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import VideoBackground from "./img/videos/Fondo Gris Oscuro Alien.mp4"

function App() {
  return (
    <div className="App">
        <header>
          <Nav />
        </header>
        <main className='main'>
            <div className='container'>
              <video src={VideoBackground} loop autoPlay></video>
            </div>
        </main>
    </div>
  );
}

export default App;
