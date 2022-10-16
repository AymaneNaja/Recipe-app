import React from 'react'
import { useState } from 'react'

export const Ingredients = ({recipe}) => {


  return (
    <>
        <label className=' text-3xl font-bold formal-text text-indigo-600 underline'
        htmlFor='ingredients '>Ingredients</label>
        <div className='ingredients'>
            {recipe.extendedIngredients.map((ingredient,index)=>{
                try{
                    return(
                        <div className='flex gap-2 justify-start font-semibold text-xl flex-wrap ' key={index}>
                            <p className='text-lg font-semibold text-blue-600'>{index+1}.{ingredient.aisle}  :</p>
                            <p className='underline'>{ingredient.amount}</p>
                            <p className='text-slate-500'>{ingredient.measures.metric.unitShort}</p>
                        </div>
                    )
                    
                }catch(err){
                    console.log(err)
                }
            })}
        </div>
    </>
  )
}

