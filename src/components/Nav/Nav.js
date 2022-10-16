import Logo from "./Logo";
import React from 'react'
import Search from "./Search";
import { useState } from "react";
import FilterPopUp from "./FilterPopUp";
import { useSearchContext } from "../../Contexts/SearchContext";


const Nav = () => {
  const [showFilter,setShowFilter]=useState(false)
  const {search,setSearch,Filter,setFilter,FilterOptions}=useSearchContext()
  return (
    <div className="food-bg grid items-start  m-auto p-6">
        <Logo/>
        <Search setShowFilter={setShowFilter}/>
        <FilterPopUp
        FilterOptions={FilterOptions}
        Filter={Filter}
        setFilter={setFilter}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        />
        
    </div>
  )
}

export default Nav