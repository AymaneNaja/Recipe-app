import { createContext, useContext, useState } from "react";



const FilterOptions={
    cuisine:'',
    diet:'',
    intolerances:'',
    type:'',
    instructionsRequired:true,
    minCarbs:10,
    maxCarbs:100,
    minProtein:10,
    maxProtein:100,
    minCalories:50,
    maxCalories:800,
    minFat:1,
    maxFat:100,
    number:100,
}

const SearchContext=createContext()
export function useSearchContext(){return useContext(SearchContext)}

export function SearchProvider({children}){
    const [search,setSearch]=useState('')
    const [Filter,setFilter]=useState([FilterOptions])

    return(
        <SearchContext.Provider value={{search,setSearch,Filter,setFilter,}}>
            {children}
        </SearchContext.Provider>

    )

}
