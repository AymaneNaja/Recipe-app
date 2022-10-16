

import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchContext } from '../../Contexts/SearchContext'
import { useRef,useState} from 'react'
import { Link } from 'react-router-dom'
import FilterBtn from './FilterBtn'

const Search = ({setShowFilter}) => {
  const {search,setSearch,Filter}
  =useSearchContext()
  const [searchLink,setSearchLink]=useState('/search/')
  const searchrRef=useRef()

  function handleLink(){
    const NewLink=Filter.map(filt=>{
      return `/search/query=${search}&cuisine=${filt.cuisine}&diet=${filt.diet}&type=${filt.type}&intolerances=${filt.intolerances}& instructionsRequired=${filt.instructionsRequired}&minCarbs=${filt.minCarbs}&maxCarbs=${filt.maxCarbs}&maxProtein=${filt.maxProtein}&minProtein=${filt.minProtein}&minFat=${filt.minFat}&maxFats=${filt.maxFat}&maxCalories=${filt.maxCalories}&minCalories=${filt.minCalories}/${search}`})
      setSearchLink(NewLink)
      
  }


  return (
    <form className='w-2/4 m-auto'> 
    <div className="relative">
    <div className='absolute -left-14 bottom-0'>
    <FilterBtn setShowFilter={setShowFilter}/>  
    </div>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <AiOutlineSearch/>
        </div>
        <input 
        ref={searchrRef}
        onChange={()=>setSearch(searchrRef.current.value)}
        className="block 
        outline-none p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-br-lg rounded-tr-lg border-2 border-gray-300  focus:border-black font-semibold " placeholder="Search Recipe..." required />
        <Link to={searchLink[0]}>
        <button 
        onClick={()=>handleLink()}
        onKeyDown={(e)=>e.key==='Enter'?handleLink():null}
        className="text-white absolute right-2.5 bottom-2.5 bg-black transition-all hover:bg-white font-bold hover:text-black rounded text-sm px-3 p-1.5 border-2 border-black  ">Search</button>
        </Link>
    </div>
</form>
  )
}

export default Search