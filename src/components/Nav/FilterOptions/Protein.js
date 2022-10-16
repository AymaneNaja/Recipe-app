import Slider from '@mui/material/Slider';
import { useState } from 'react';


const Protein = ({Filter,setFilter}) => {
    const [Pro,setPro]=useState([28,89])
    function valuetext(Pro) {
      return `${Pro}°C`;
    }
    const handleChange = (event, newValue) => {
        const NewFilter=Filter.map(el=>{
            return { ...el,minProtein:newValue[0],maxProtein:newValue[1]}
        })
        setFilter(NewFilter)
        setPro(newValue)
      };
 
  return (
    <div className='relative font-bold'>
        <label>MinPro</label>
        <label className='absolute right-0'>MaxPro</label>
        <Slider
        min={10}
        max={100}
        value={Pro}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        />
    </div>
  )
}

export default Protein