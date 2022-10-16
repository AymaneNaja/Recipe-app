import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export const TypesOptions = [
    { value: 'main course', label: 'main course' },
    { value: 'side dish', label: 'side dish' },
    { value: 'dessert', label: 'dessert' },
    { value: 'appetizer', label: 'appetizer' },
    { value: 'snack', label: 'snack'},
    { value: 'beverage', label: 'beverage' },
  ]

const Types = ({Filter,setFilter}) => {
      const animatedComponents = makeAnimated();

      function handleTypes(e){
        const types=e.map(cuisine=>cuisine.value)
        const NewFilter= Filter.map(el=>{
            return {...el,Types:types}
        })
        setFilter(NewFilter)
      }
  return (
    <div className='flex items-center justify-between w-full m-1'>
        <label className='mx-1 font-bold'>Types:</label>       
        <Select
        className='w-5/6'
        placeholder='Types...'
         options={TypesOptions} 
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        onChange={(e)=>handleTypes(e)}
        />
    </div>
  )
}

export default Types