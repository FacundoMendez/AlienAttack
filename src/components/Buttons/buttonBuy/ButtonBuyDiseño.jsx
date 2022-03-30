import React from 'react'

const ButtonBuyDiseño = ({nameClass,text}) => {
  return (
    <div className={nameClass}>
        <p className="buttonBuy">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                {text}
        </p>
    </div>

  )
}

export default ButtonBuyDiseño