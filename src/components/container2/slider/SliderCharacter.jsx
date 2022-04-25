import React, {useEffect, useState} from 'react'
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
import PopupBuy from '../../Buttons/PopupBuy'
import SliderFuncional from './SliderFuncional'
import Stats from '../../Buttons/buttonStats/Stats'
import ButtonBuy from '../../Buttons/buttonBuy/ButtonBuy';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';  
import Loader from '../../loader/Loader';

const SliderCharacter = () => {

  const[characters, setCharacters]= useState([{}])
  const[loading, setLoading] = useState(false)
  const[characterId, setCharacterId]= useState(1)

  const[id, setId]= useState(1)

  useEffect(() =>{

    /* armar la referencia de la base de datos */
    
    const charactersRef = collection(db, "characters");

    /* llamar (async) esa referencia */

    getDocs(charactersRef)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        console.log(items)      
        setCharacters(items)
      }).finally(() => {
        setLoading(true)
        SliderFuncional({setCharacterId})

      })



  },[])  



  /* state */
    const[popupVenta, setPopupVenta]= useState(false) /* activa el boton de comprar */
    /* valores para las stats */

    const[activePopupStats, setActivePopupStats] = useState(false)

  

  return (
    <>
      {
        loading ?
        <div className="wrapper">
          <div className="blur"></div>

          <div className="slider">
            <div id="1" className="character1 slide  ">
              <img src={characters[0].img} alt="character1" />
            </div>
            <div id="2" className="slide character2">
              <img src={characters[1].img} alt="character2" />
            </div>
            <div id="3" className="slide character3">
              <img src={characters[2].img} alt="character3" />
            </div>
            <div id="4" className="slide character4">
              <img src={characters[3].img} alt="character4" />
            </div>
            <div id="5" className="slide character5">
              <img src={characters[4].img} alt="character5" />
            </div>
            <div id="6" className="slide character6">
              <img src={characters[5].img} alt="character6" />
            </div>
            <div id="7" className="slide character7">
              <img src={characters[6].img} alt="character7" />
            </div>
            <div id="8" className="slide character8">
              <img src={characters[7].img} alt="character8" />
            </div>
     
          </div>

          <div className="buttons">
            <span
              className="button button--next"
              id="next"
              onClick={() => {
                setId(characters[characterId ].id)
              }}
            
            >

              <b className="arrow">            
                <FaAngleRight />
              </b>

            </span>
            <span
              className="button button--prev"
              id="prev"
              onClick={() => setId(characters[characterId].id)}
            >
              <b className="arrow">
            
                <FaAngleLeft />
              </b>
            </span>

            <Stats
              id={characters[characterId -1].id}

              characters={characters}

              setPopupVenta={setPopupVenta}

              precio={characters[characterId -1].precio}

              setActivePopupStats={setActivePopupStats}

              /* fuerza */

              valorFuerza={characters[characterId -1].fuerza}
              

              titleFuerza="Damage"

              textFuerza="The damage depends on the difference between additional AD and additional AP: for units with more additional AD it is granted physical damage, for units with more additional AP it is granted magic damage."


              /* velocidad */

              valorVelocidad={characters[characterId -1].velocidad}


              titleVelocidad="Speed"

              textVelociad="Movement Speed ​​is a champion stat that represents the speed at which a champion travels across a map."



              /* vida */

              valorHp={characters[characterId -1].vida}


              textHp="
              Amount of health a champion has plus 1% per defense unit as bonus health due to damage reduction. In other words, health is the amount of damage an enemy needs to deal to kill the champion."

              titleHp="Health"
            />
            
            
            {!activePopupStats ? <ButtonBuy
              id={characters[characterId -1].id}
              characters={characters}
              setPopupVenta={setPopupVenta}
            /> : null}

            { popupVenta ? <PopupBuy
                setPopupVenta={setPopupVenta}
                class={characters[characterId -1].nombre}
                id={characters[characterId -1].id}
                characters={characters}
                img={characters[characterId -1].img}
              /> : null}
          </div>
      
        </div>
    : <Loader />
    } 
  </>
  );

} 
export default SliderCharacter