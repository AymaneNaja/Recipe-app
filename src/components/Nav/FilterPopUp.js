import React from 'react'
import ReactDOM  from 'react-dom'
import {TiDelete} from 'react-icons/ti'
import Cuisine from './FilterOptions/Cuisine';
import Diet from './FilterOptions/Diet';
import Intolerances from './FilterOptions/Intolerances';
import Types from './FilterOptions/Types';
import Carbs from './FilterOptions/Carbs';
import Protein from './FilterOptions/Protein';
import Calories from './FilterOptions/Calories';
import Fats from './FilterOptions/Fats';
import {BiFilterAlt} from 'react-icons/bi'


const FilterPopUp = ({showFilter,setShowFilter,Filter,setFilter}) => {

  return ReactDOM.createPortal(
   <>{showFilter ? <div 
    className='fixed top-0 right-0 left-0 bottom-0 w-full h-full faded-bg flex justify-center items-center bg-gray-300 bg-opacity-60 '>
        <div className=' w-3/4  h-fit  bg-white rounded relative p-10
        '>
        <span className='formal-text flex justify-center m-y-2 text-4xl gap-1'>
        <BiFilterAlt className='' />Filter<p className='text-gray-400'>Recipe</p>
        </span>
        <Cuisine Filter={Filter} setFilter={setFilter}/>
        <Diet Filter={Filter} setFilter={setFilter}/>
        <Intolerances Filter={Filter} setFilter={setFilter}/>
        <Types Filter={Filter} setFilter={setFilter}/>
        <Protein Filter={Filter} setFilter={setFilter}/>
        <Carbs Filter={Filter} setFilter={setFilter}/>
        <Fats Filter={Filter} setFilter={setFilter}/>
  
        <Calories Filter={Filter} setFilter={setFilter}/>
             <button className='absolute top-0 right-0 hover:text-red-500 transition-all '
            onClick={()=>setShowFilter(false)}><TiDelete
                className='btn-scale'
               
             /></button>   
        </div>
    </div>:null}</>
    ,document.getElementById('portal')
  )
}

export default FilterPopUp