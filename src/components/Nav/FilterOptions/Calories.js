import Slider from '@mui/material/Slider';
import { useState } from 'react';


const Calories = ({Filter,setFilter}) => {
    const [Cal,setCal]=useState([28,89])
    function valuetext(Calories) {
      return `${Calories}°C`;
    }
    const handleChange = (event, newValue) => {
        const NewFilter=Filter.map(el=>{
            return { ...el,maxCalories:newValue[0],minCalories:newValue[1]}
        })
        setFilter(NewFilter)
        setCal(newValue)
      };
 
  return (
    <div className='relative font-bold'>
        <label>minCalories</label>
        <label className='absolute right-0'>MaxCalories</label>
        <Slider
        min={5}
        max={100}
        value={Cal}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        />
    </div>
  )
}

export default Calories