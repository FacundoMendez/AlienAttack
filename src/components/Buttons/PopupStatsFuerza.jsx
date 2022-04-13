import React, {useContext, useState}from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'
import TokenContext from '../context/TokenContext'
import noCash from './NoCash'
import "./buttonStats/stats.css"
import FuerzaStats from './buttonStats/FuerzaStats'
import PopupNoCharacters from "./buttonBuy/PopupNoCharacter"

const PopupStats = ({ setActive, valorFuerza, setStatFuerza}) => {
  const contextToken = useContext(TokenContext)

  const [priceState, setPriceState]= useState(0)
  const [confirm, setConfirm] = useState(false)
  const [noCharacter, setNoCharacter] = useState(false)

  

  return (
    <div>
      
      <div className="containerPopupStats">
        <div className="popupStats">
          <div className="titlePopupStats">
            <h2>Do you want to increase your character's skill?</h2>
          </div>
          {noCharacter ? <PopupNoCharacters /> : null}

          <FuerzaStats
            setConfirm={setConfirm}
            priceState={priceState}
            valorFuerza={valorFuerza}
            setStatFuerza={setStatFuerza}
            setPriceState={setPriceState}
          />

          <div className="buttonsCheckStats">
            <div className="no" onClick={() => setActive(false)}>
              <ButtonBuyDiseño nameClass="configButtonStats" text={"NO"} />
            </div>

            <div
              className="yes" onClick={() => {
                let confirmBuyCharacter = sessionStorage.getItem("confirmacion de venta");

                if (confirmBuyCharacter === "true") {
                  setNoCharacter(false)
                  if (contextToken.token - priceState >= 0) {
                    contextToken.setToken(contextToken.token - priceState);
                    setActive(false);
                    setConfirm(true);
                  } else {
                    noCash();
                  }
                } else  {
                  setNoCharacter(true)
                }
              }}
            >
              <ButtonBuyDiseño nameClass="configButtonStats" text={"YES"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupStats