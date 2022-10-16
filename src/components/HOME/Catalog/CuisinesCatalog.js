import React from 'react'
import ReactCountryFlag from "react-country-flag"
import { Link } from 'react-router-dom'
const CuisinesCatalog = ({Tag,Options,svg=false,svgType,color,textColor}) => {
  console.log(Tag.toLowerCase())
  return (
    <div className='w-4/6 m-auto'>
    <h1 className='font-bold text-3xl text-gray-500 underline m-4  text-center first-letter:uppercase'>{Tag} Catalog</h1>
    <div className='h-full w-full flex gap-2 flex-wrap justify-center items-center overflow-hidden  '>

      {Options.map((opt,index)=>{
        return (
          <Link to={`/search/${Tag}=${opt.value}/${opt.value} `}
            key={index} className=' bg-slate-300 w-28 h-20  rounded-lg relative overflow-hidden border-2  text-gray-600 hover:bg-opacity-60 hover:text-gray-500 transition-all
           hover:border border-gray-400 '
          style={{backgroundColor:color=='base'?'':color,color:textColor==='base'?'':textColor}}>
          
          <p className='absolute top-1 left-1 font-bold  text-ellipsis first-letter:uppercase w-2/4 '>{opt.value}</p>
          {svg?<div className='absolute -bottom-3 -right-4 rotate-45 hover:-bottom-1 transition-all'><ReactCountryFlag countryCode={opt.code} svg style={{
                    width: '3.5em',
                    height: '3.5em',
                }} />
                </div>:null}
                </Link>
        )
      })}

    </div></div>
  )
}

export default CuisinesCatalog