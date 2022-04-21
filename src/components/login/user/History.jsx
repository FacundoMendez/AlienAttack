import React,{useEffect, useState} from 'react'
import Loader from '../../loader/Loader'


const History = ({history,fyh}) => {

    const [active, setActive] = useState(false)

    useEffect(()=>{
      setTimeout(() => {
        setActive(true)
    }, 3000);
    },[])
  
  return (
    <>
    {active ?
        <div className="historyUser">
            <p><span className='id'>-Purchase ID:</span>  {history}. <span className='time'> Date and Time: </span> {fyh}  </p>
        </div>  
    : <Loader />}
    </>
  )
}

export default History