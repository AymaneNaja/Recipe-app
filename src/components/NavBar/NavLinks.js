

import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'
const NavLinks = () => {
  return (
    <div className='flex align-middle mr-6 gap-2 ml-3'>
        <Link to={'/'} 
        className='rounded-full bg-sky-100 p-3  transition-all hover:bg-slate-100' >
            <span 
            className='flex scale-150'>
                <AiFillHome className='text-gray-600'/>
            </span>
        </Link>
        <Link to={'/favorites'} 
        className='rounded-full bg-sky-100 p-3  transition-all hover:bg-slate-100' >
            <span 
            className='flex scale-150'>
                <MdFavorite className='text-gray-600'/>
            </span>
        </Link>
        
        
    </div>
  )
}

export default NavLinks