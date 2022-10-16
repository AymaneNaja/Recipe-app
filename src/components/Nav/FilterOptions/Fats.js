import Slider from '@mui/material/Slider';
import { useState } from 'react';


const Fats = ({Filter,setFilter}) => {
    const [Fats,setFats]=useState([28,89])
    function valuetext(Fats) {
      return `${Fats}°C`;
    }
    const handleChange = (event, newValue) => {
        const NewFilter=Filter.map(el=>{
            return { ...el,minFat:newValue[0],maxFat:newValue[1]}
        })
        setFilter(NewFilter)
        setFats(newValue)
      };
 
  return (
    <div className='relative font-bold'>
        <label>MinFats</label>
        <label className='absolute right-0'>MaxFats</label>
        <Slider
        min={1}
        max={100}
        value={Fats}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        />
    </div>
  )
}

export default Fats