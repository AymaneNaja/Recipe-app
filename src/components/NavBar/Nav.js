


import React, { useState } from 'react'
import { useSearchContext } from '../../Contexts/SearchContext'
import Favorites from '../Favorites/Favorites'
import Logo from './Logo'
import NavLinks from './NavLinks'
import SearchComponent from './Search'

const Nav = () => {
  return (
        <div className=' max-w-screen-lg
        h-28 flex justify-between items-center
        m-auto'>
            <Logo />
            <div className='flex justify-between items-center'>
            <SearchComponent />
            <NavLinks/>
            
            </div>
        </div>
  )
}

export default Nav