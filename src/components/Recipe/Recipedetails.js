import {AiFillCheckCircle} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'
import React from 'react'

export const Recipedetails = ({recipe}) => {
  return (
    <div className='flex flex-wrap justify-start gap-1 items-start text-sm my-4'>
        <div className='flex flex-wrap gap-1 items-start justify-start'>
       {recipe.lowFodmap? <div className='flex gap-1 items-center '> 
            <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >lowFodmap</label>
        </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >lowFodmap</label>}
         {recipe.sustainable? <div className='flex gap-1 items-center '> 
            <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >sustainable</label>
         
        </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >sustainable</label>}
        {recipe.vegan?<div className='flex gap-1 items-center '> 
            <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >vegan</label>
        </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >vegan</label>}
        {recipe.veryHealthy?<div className='flex gap-1 items-center '> 
            <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >veryHealthy</label>
        </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >veryHealthy</label>}
        {recipe.veryPopular? <div className='flex gap-1 items-center '> 
            <label className='text-white p-2 rounded-xl bg-green-500 font-bold ' >veryPopular</label>
           
        </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >veryPopular</label>}
        </div>
        <div className='flex flex-wrap gap-1'>
        {recipe.whole30?<div className='flex gap-1 items-center'> 
                <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >whole30</label>
            </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >whole30</label>}
           {recipe.cheap? <div className='flex gap-1 items-center'> 
                <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >Cheap</label>
                
            </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >Cheap</label>}
            {recipe.dairyFree?<div className='flex gap-1 items-center '> 
                <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >Dairy Free</label>
            </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >Dairy Free</label>}
            {recipe.glutenFree?<div className='flex gap-1 items-center '> 
                <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >gluten Free</label>
            </div>:<label className='text-white p-2 rounded-xl bg-red-500 font-bold' >gluten Free</label>}
            {recipe.ketogenic?<div className='flex gap-1 items-center '> 
                <label className='text-white p-2 rounded-xl bg-green-500 font-bold' >ketogenic</label>
                
            </div>: <label className='text-white p-2 rounded-xl bg-red-500 font-bold' >ketogenic</label>}
        </div>

    </div>
  )
}

