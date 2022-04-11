import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function VidaStats() {

  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    console.log(progress)
  },[100])
  
  return (
    <Box width={300}>
      <Slider defaultValue={progress} 
              aria-label="Default" 
              valueLabelDisplay="auto"

              sx={{
                width: 300,
                color: 'success.main',
              }}
              
      />
    </Box>
  );
}