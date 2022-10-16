import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

 export const IntorenceOptions = [
        { value: 'Dairy', label: 'Dairy'},
        { value: 'Egg', label: 'Egg' },
        { value: 'Gluten', label: 'Gluten' },
        { value: 'Grain', label: 'Grain' },
        { value: 'Peanut', label: 'Peanut'},
        { value: 'Seafood', label: 'Seafood' },
        { value: 'Sesame', label: 'Sesame' },
        { value: 'Shellfish', label: 'Shellfish' },
        { value: 'Soy', label: 'Soy'},
        { value: 'Sulfite', label: 'Sulfite' },
        { value: 'Tree Nut', label: 'Tree Nut'},
        { value: 'Wheat', label: 'Wheat'},
      ]
const Intolerances = ({Filter,setFilter}) => {
   
      const animatedComponents = makeAnimated();

      function handleIntolerances(e){
        const Intolerances=e.map(cuisine=>cuisine.value)
        const NewFilter= Filter.map(el=>{
            return {...el,intolerances:Intolerances}
        })
        setFilter(NewFilter)
      }
  return (
    <div className='flex items-center justify-between w-full m-1 gap-1'>
        <label className=' font-bold'>Intolerances:</label>       
        <Select
        className=' w-5/6'
        placeholder='Intolerances...'
         options={IntorenceOptions} 
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        onChange={(e)=>handleIntolerances(e)}
        />
    </div>
  )
}

export default Intolerances