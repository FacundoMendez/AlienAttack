import React, {useEffect} from 'react';
import VideoBackground from "../../img/videos/backgroundVideoAlien.mp4"
import { Title } from '../container/Title';
import Container2Scene from '../container2/Scene';
import EffectMovie from '../container/EffectMovie';
import Preload from '../preload/Preload';
import PresentGame from '../container1/PresentGame.jsx';
import Footer from '../footer/Footer';
import LetrasRandom from '../container3Random/LetrasRandom';


function Home() {

  useEffect(() => {
    EffectMovie()
  },[])

  return (
      <div className="App">
          <Preload />
          <main className='main'>

              <div className='containerTitle'>
                  <hr className='lineHorizontal'></hr>
                  <hr className='lineVertical'></hr>
                  <Title text="Play"/>
              </div>

              <canvas id="container" className='container'> </canvas>

              <div className='containerVideoAlien'>
                  <video src={VideoBackground} autoPlay loop muted ></video>
              </div>

              <PresentGame/>
              <Container2Scene/>
              <LetrasRandom/>
              <Footer/>

          </main>
      </div>
  );
}

export default Home;
