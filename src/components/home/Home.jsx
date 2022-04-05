import React, {useEffect} from 'react';
import VideoBackground from "../../img/videos/backgroundVideoAlien.mp4"
import { Title } from '../container/Title';
import Container2Scene from '../container2/Scene';
import EffectMovie from '../container/EffectMovie';
import Preload from '../preload/Preload';



function Home() {

  useEffect(() => {
    EffectMovie()
  },[])

  return (
      <div className="App">
          <Preload />
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
  );
}

export default Home;
