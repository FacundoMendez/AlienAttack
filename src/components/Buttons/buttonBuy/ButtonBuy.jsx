import React from 'react'

const ButtonBuy = (props) => {
    return (
        <div className="buttonBuyContainer">
            <div id={props.id} className="buy" onClick={()=> {
                    const characterObj = props.characters.filter( e => e.id== props.id);
                    console.log(...characterObj);
                    props.setPopupVenta(true);
                }} >
                <p className="buttonBuy">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        BUY
                </p>
            </div>
        </div>
    )
}

export default ButtonBuy