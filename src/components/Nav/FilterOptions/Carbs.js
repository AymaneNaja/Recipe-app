import Slider from '@mui/material/Slider';
import { useState } from 'react';


const Carbs = ({Filter,setFilter}) => {
    const [Carbs,setCarbs]=useState([28,89])
    function valuetext(Carbs) {
      return `${Carbs}°C`;
    }
    const handleChange = (event, newValue) => {
        const NewFilter=Filter.map(el=>{
            return { ...el,minCarbs:newValue[0],maxCarbs:newValue[1]}
        })
        setFilter(NewFilter)
        setCarbs(newValue)
      };
 
  return (
    <div className='relative font-bold'>
        <label>MinCarbs</label>
        <label className='absolute right-0'>MaxCarbs</label>
        <Slider
        min={10}
        max={100}
        value={Carbs}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        />
    </div>
  )
}

export default Carbs