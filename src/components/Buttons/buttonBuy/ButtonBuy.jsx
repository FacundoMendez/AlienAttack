import React from 'react'

const ButtonBuy = (props) => {
    return (
        <div className="buttonBuyContainer">
            <div id={props.id} className="buy" onClick={()=> {
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