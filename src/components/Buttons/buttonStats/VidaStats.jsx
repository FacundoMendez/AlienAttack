import React,{useState,useEffect} from 'react';


export default function VidaStats({setConfirm,setPriceState,valorHp ,setStatHp,priceState}) {
  console.log(valorHp)

  const [progress,setProgress] = useState(priceState + valorHp)
  useEffect(()=>{
    setPriceState(progress*5)
    
    if (setConfirm){
      setStatHp(progress)


    }else{
      setStatHp(valorHp)

    }
  })

  return (
    <div className="containerStatsBuy">
      <div className="barStats">
        <input
            type="range"
            onChange={(ev) => setProgress(ev.target.value)}
            className="rango"
            min={50}
            max={100}
          />
        <p className='cantStatsPorcent'>{progress}%</p>
      </div>
      <p className='priceStatsBuy'>${progress*5} ATCK</p>
    </div>
  );
}