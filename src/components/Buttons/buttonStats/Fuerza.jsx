import React,{useState} from 'react'
import "./stats.css"

const Fuerza = () => {

    const [progress, setProgress] = useState({value:5})


  return (
    <form className="form">
        <InputRange
        maxValue={100}
        minValue={0}
        value={progress.value}
        onChange={value => setProgress({ value })}
        onChangeComplete={value => console.log(value)} />
  </form>
  )
}

export default Fuerza