import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function VidaStats(props) {

  const [progress, setProgress] = useState(0)

  return (
    <div className="containerStatsBuy">
      <div className="barStats">
        <input
            type="range"
            onChange={(ev) => setProgress(ev.target.value)}
            min={props.vida} max="100"
            className="rango"
          />
        <p className='cantStatsPorcent'>{progress}%</p>
      </div>
      <p className='priceStatsBuy'>${progress*5} ATCK</p>
    </div>
  );
}