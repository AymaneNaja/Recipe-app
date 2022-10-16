import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export const DietOptions = [
        { value: 'Gluten Free', label: 'Gluten Free' },
        { value: 'Ketogenic', label: 'Ketogenic' },
        { value: 'Vegetarian', label: 'Vegetarian' },
        { value: 'Lacto-Vegetarian', label: 'Lacto-Vegetarian' },
        { value: 'Ovo-Vegetarian', label: 'Ovo-Vegetarian' },
        { value: 'Vegan', label: 'Vegan' },
        { value: 'Pescetarian', label: 'Pescetarian' },
        { value: 'Paleo', label: 'Paleo' },
        { value: 'Primal', label: 'Primal' },
        { value: 'Low FODMAP', label: 'Low FODMAP' },
        { value: 'Whole30', label: 'Whole30' },
      ]

const Diet = ({Filter,setFilter}) => {
    
      const animatedComponents = makeAnimated();

      function handleDiet(e){
        const Diets=e.map(cuisine=>cuisine.value)
        const NewFilter= Filter.map(el=>{
            return {...el,diet:Diets}
        })
        setFilter(NewFilter)
      }
  return (
    <div className='flex items-center justify-between w-full m-1'>
        <label className='mx-1 font-bold'>Diet:</label>       
        <Select
        className='w-5/6'
        placeholder='Diets..'
         options={DietOptions} 
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        onChange={(e)=>handleDiet(e)}
        />
    </div>
  )
}

export default Diet