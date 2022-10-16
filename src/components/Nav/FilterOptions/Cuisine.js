import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useRef } from 'react';
import { useState } from 'react';



export const CuisineOptions = [
        { value: 'African', label: 'African' ,code:'MA'},
        { value: 'American', label: 'American',code:'US' },
        { value: 'British', label: 'British',code:'GB' },
        { value: 'caribbean', label: 'caribbean',code:'BZ'},
        { value: 'chinese', label: 'chinese',code:'CN' },
        { value: 'Eastern European', label: 'Eastern European',code:'RO'},
        { value: 'European', label: 'European' ,code:'GR'},
        { value: 'French', label: 'French' ,code:'FR'},
        { value: 'German', label: 'German',code:'DE' },
        { value: 'Irish', label: 'Irish',code:'IE' },
        { value: 'Indian', label: 'Indian',code:'IN' },
        { value: 'italian', label: 'italian',code:'IT' },
        { value: 'japanese', label: 'japanese',code:'JP' },
        { value: 'jewish', label: 'jewish' ,code:'IL'},
        { value: 'korean', label: 'korean' ,code:'KR'},
        { value: 'latin American', label: 'latin American',code:'BR' },
        { value: 'Mediterranean', label: 'Mediterranean',code:'LB'},
        { value: 'mexican', label: 'mexican',code:'MX'},
        { value: 'Middle Eastern', label: 'Middle Eastern',code:'SA' },
        { value: 'Nordic', label: 'Nordic',code:'NO' },
        { value: 'southern', label: 'southern',code:'ZA' },
        { value: 'spanish', label: 'spanish' ,code:'ES'},
        { value: 'thai', label: 'thai',code:'TH' },
        { value: 'vietnamese', label: 'vietnamese',code:'VN' },
      ]
const Cuisine = ({Filter,setFilter}) => {
    const cuisineRef=useRef()
    
      const animatedComponents = makeAnimated();

      function handleCuisine(e){
        const Cuisines=e.map(cuisine=>cuisine.value)
        const NewFilter= Filter.map(el=>{
            return {...el,cuisine:Cuisines}
        })
        setFilter(NewFilter)
      }
  return (
    <div className='flex items-center justify-between w-full gap-1 m-1'>
        <label className='mx-1 font-bold'>Cuisine:</label>       
        <Select
        className='w-5/6  '
        placeholder='cuisine..'
        options={CuisineOptions} 
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        onChange={(e)=>handleCuisine(e)}
        ref={cuisineRef}
        />
    </div>
  )
}

export default Cuisine