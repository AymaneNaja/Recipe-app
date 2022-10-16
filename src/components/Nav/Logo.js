
import TasteMagnet from './img/TasteMagnet-logos_white.png'
import Magnet from './img/High Resolution Logo - Transparent Background.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    
    <Link to={'/'}>
    <div className='flex w-full h-fit justify-center items-center mb-10  '>
        <img className='Logo-img bg-whiter rounded-lg w-fit bg-black   hover:bg-slate-800 rounded-full p-2 transition-all'
         src={Magnet}></img>
    </div>
    </Link>
  )
}

export default Logo