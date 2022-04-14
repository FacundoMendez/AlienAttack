import React,{useState,useEffect} from 'react';


export default function VidaStats({setPriceState,valorHp ,priceState}) {
  const [progress,setProgress] = useState(priceState)
  const [active,setActive] = useState(false)
  
  useEffect(()=>{
    setPriceState(progress*10 - valorHp*10)
  })

  return (
    <div className="containerStatsBuy">
      <div className="barStats">
        <input onClick={()=> setActive(true)}
            type="range"
            onChange={(ev) => setProgress(ev.target.value)}
            className="rango"
            min={String(valorHp)}
            max={100}
          onTouchStart={() => setActive(true)}/>
        <p className='cantStatsPorcent'>{progress}%</p>
      </div>
      <p className='priceStatsBuy'>${active ? progress*10 - valorHp*10  : 0} ATCK</p>
    </div>
  );
}