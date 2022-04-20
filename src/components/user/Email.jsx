import React,{useState, useEffect} from 'react'
import "./cards.css"
import Loader from '../loader/Loader'

const EmailUser = ({email}) => {

  const [active, setActive] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setActive(true)
  }, 4500);
  },[])




  return (
    <>
    {active ?
    <div className="emailUser">
        <p>{email}</p>
    </div>
    : <Loader />}

    </>
  )
}

export default EmailUser