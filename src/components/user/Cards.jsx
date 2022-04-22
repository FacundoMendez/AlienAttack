import React,{useState, useEffect} from 'react'
import "./cards.css"
import Loader from '../loader/Loader'

const Cards = () => {
  let img = localStorage.getItem("Imagen del producto")
  let classImg = localStorage.getItem("clase de imagen")

  const [active, setActive] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setActive(true)
  }, 4500);

  return () => {
    setActive({});
  };
  },[])




  return (
    <>
    {active ?
      <div className="card">
          <div className="cardImg ">
              <img className={classImg} src={img} alt="Character" />
          </div>
      </div>
    : <Loader />}

    </>
  )
}

export default Cards