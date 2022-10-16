import React from 'react'
import CuisinesCatalog from './CuisinesCatalog'
import { CuisineOptions } from '../../Nav/FilterOptions/Cuisine'
import { IntorenceOptions } from '../../Nav/FilterOptions/Intolerances'
import { DietOptions } from '../../Nav/FilterOptions/Diet'
const Catalog = () => {
  return (
    <div className='mb-10'>
        <CuisinesCatalog Tag={'cuisine'}
         Options={CuisineOptions} color={'base'} svg={true} textColor={'base'}/>
        <CuisinesCatalog Tag={'diet'} Options={DietOptions} color={'#77c1e4'} svg={false} textColor={'white'}/>
        <CuisinesCatalog Tag={'intolerances'} Options={IntorenceOptions} svg={false}
        color={'#f77a31'} textColor={'lightcyan'}/>
    </div>
  )
}

export default Catalog