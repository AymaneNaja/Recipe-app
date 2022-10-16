
import React from 'react'
import {TbAdjustments} from 'react-icons/tb'
const FilterBtn = ({setShowFilter}) => {

  return (
    <div className='bg-gray-50 w-fit h-fit  rounded-tl-lg rounded-bl-lg hover:bg-black hover:text-white transition-all border-gray-300 border-2 p-0.5 '
    onSubmit={e => { e.preventDefault(); }}>
        <button
        className='flex justify-center  p-4 items-center hover:text-white text-black'
        onClick={(e)=>{
        e.preventDefault()
        setShowFilter(prev=>!prev)}}
        onKeyDown={(e)=>
        e.key!=='Enter'?setShowFilter(prev=>!prev):null}
        ><TbAdjustments
        className='scale-175'
        /></button>
    </div>
  )
}

export default FilterBtn