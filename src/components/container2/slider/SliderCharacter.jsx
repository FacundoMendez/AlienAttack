import React, {useEffect, useState} from 'react'
import character9 from "../characters/character1.png"
import character6 from "../characters/character2.png"
import character5 from "../characters/character3.png"
import character2 from "../characters/character4.png"
import character4 from "../characters/character5.png"
import character3 from "../characters/character6.png"
import character7 from "../characters/character7.png"
import character8 from "../characters/character8.png"
import character1 from "../characters/character9.png"
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import Stats from './Stats'
import Popup from '../../Buttons/Popup'

const SliderCharacter = () => {
    const[characterId, setCharacterId]= useState(1)

    const[characters, setCharacters]= useState([
      {
        id:1,
        nombre:"",
        vida: 40,
        velocidad: 60,
        fuerza:  20,
        img: character1,
        precio: 700 ,
      },
      {
        id:2,
        nombre:"",
        vida: 50,
        velocidad: 30 ,
        fuerza: 40 ,
        img: character2,
        precio: 600 ,
      },
      {
        id:3,
        nombre:"",
        vida: 50,
        velocidad:50,
        fuerza:50  ,
        img: character3,
        precio: 900 ,
      },
      {
        id:4,
        nombre:"",
        vida: 40,
        velocidad:  60,
        fuerza:  50,
        img: character4,
        precio: 650 ,
      },
      {
        id:5,
        nombre:"",
        vida: 50,
        velocidad: 30,
        fuerza: 60 ,
        img: character5,
        precio: 500 ,
      },
      {
        id:6,
        nombre:"",
        vida: 40,
        velocidad: 50,
        fuerza: 35 ,
        img: character6,
        precio: 550 ,
      },
      {
        id:7,
        nombre:"",
        vida: 70,
        velocidad:  20,
        fuerza: 40 ,
        img: character7,
        precio: 750 ,
      },
      {
        id:8,
        nombre:"",
        vida:25,
        velocidad: 60 ,
        fuerza: 60 ,
        img: character8,
        precio: 660 ,
      },
      {
        id:9,
        nombre:"",
        vida: 100 ,
        velocidad: 10,
        fuerza: 80,
        img: character9,
        precio: 800 ,
      },

    ])



    
    useEffect(() =>{

        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prev = document.querySelector('#prev');
        const next = document.querySelector('#next');
        var activeIndex = 1;
        var animating = false;
        var translateDuration = .5;
        
        slides.forEach((slide,index) => {
          slide.dataset.index = index+1;
        })
        
        next.addEventListener('click', () => changeStep('next'));
        prev.addEventListener('click', () => changeStep('prev'));
        
        function changeStep(direction, id) {
          if(!animating) {
            animating = true;
            var transX;
            var currentIndex = activeIndex;
        
            slides.forEach((slide,index) => {
              (index + 1 === activeIndex)
                ? slide.classList.add('active') 
                : slide.classList.remove('active')
            })
        
            if(direction === 'next') {
              if(activeIndex < slides.length) {
                transX = (100/slides.length)*activeIndex;
                currentIndex++;
                id= currentIndex;
                setCharacterId(id)

              } else {
                 transX = 0;
                 currentIndex = 1;
                 id= currentIndex;
                 setCharacterId(id)
              }
            } else {
              if(activeIndex >= 2) {
                transX = (100/slides.length)*(activeIndex-2);
                currentIndex--;
                id= currentIndex;
                setCharacterId(id)

              }  else {
                 transX = (100-(100/slides.length));
                 currentIndex = slides.length;
                 id= currentIndex;
                 setCharacterId(id)

              }
            }
            document.querySelector(`[data-index="${activeIndex}"]`).style.animation = `motion-blur ${translateDuration}s ease-in forwards`;
            setTimeout(() => {
              slider.style.transform =`translateX(-${transX}%)`;
            }, translateDuration*1000);
            setTimeout(() => {
              document.querySelector(`[data-index="${activeIndex}"]`).style.animation = `none`;
              activeIndex = currentIndex;
              animating = false;
            }, translateDuration*1000*2);
            
          }

          
          /* function stats */


        
        }
    },[])  


    const[id, setId]= useState(1)
   

  return (
    <div className="wrapper">
          <div className="blur"></div>

        <div className="slider">
            <div id="1" className="character1 slide  ">
                <img  src={character1} />
            </div>
            <div id="2" className="slide character2">
                <img src={character2} />
            </div>
            <div id="3" className="slide character3">
                <img src={character3} />
            </div>
            <div id="4" className="slide character4">
                <img src={character4} />
            </div>
            <div id="5" className="slide character5">
                <img src={character5} />
            </div>
            <div id="6" className="slide character6">
                <img src={character6} />
            </div>
            <div id="7" className="slide character7">
                <img src={character7} />
            </div>
            <div id="8" className="slide character8">
                <img src={character8} />
            </div>
            <div id="9" className="slide character9">
                <img src={character9} />
            </div>
        </div>


        <div className="buttons">
        <span className="button button--next" id="next" onClick={() => setId(characterId-1)}> <b className="arrow">

          <FaAngleRight /> </b>   
        </span>


        <span className="button button--prev" id="prev" onClick={() => setId(characterId-1)}><b className="arrow" > <FaAngleLeft /> </b></span>
        
        <Stats 
            characters={characters}

            id={characterId}

            valorFuerza={characters[id].fuerza}
            titleFuerza="FUERZA"
            textFuerza="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Iste hic libero minus explicabo est nemo, soluta id culpa 
              consectetur doloribus eius aliquam quisquam rerum quasi cum 
              voluptas ipsam placeat veniam"

            valorVelocidad={characters[id].velocidad}
            titleVelocidad="VELOCIDAD"
            textVelociad="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Iste hic libero minus explicabo est nemo, soluta id culpa 
            consectetur doloribus eius aliquam quisquam rerum quasi cum 
            voluptas ipsam placeat veniam"

            valorHp={characters[id].vida}
            textHp="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Iste hic libero minus explicabo est nemo, soluta id culpa 
            consectetur doloribus eius aliquam quisquam rerum quasi cum 
            voluptas ipsam placeat veniam"
            titleHp="VIDA"
            />
       
    </div>
      
  </div>

  )
}

export default SliderCharacter