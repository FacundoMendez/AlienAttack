import React,{useState, useEffect} from 'react'
import "./User.css"
import Cards from './Cards'
import NoCards from './NoCards'

const User = () => {
    let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")
    sessionStorage.removeItem("popupNavAlert")
    sessionStorage.setItem("login", true )

    const[cards, setCards]= useState(false)


    useEffect(()=>{
        let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")
        if(confirmacionVenta === "true"){
            setCards(true)
        }
    },[])


    

  return (
    <div className='tableUser'>
        <div className='containerList'>
            <ul className='listUser'>
                <li className='characters' onClick={() => {

                    if(confirmacionVenta === "true"){
                        setCards(true)
                    }else{
                        setCards(false)
                    }
                   }} >
                    CHARACTERS
                </li>

                <li>TOKENS</li>
                <li>USER NAME</li>
                <li>EMAIL</li>
                <li>PASSWORD</li>
            </ul>
        </div>
        <div className='containerView'>
            {cards ? <Cards/> : <NoCards /> } 
        </div>
    </div>

  )
}

export default User