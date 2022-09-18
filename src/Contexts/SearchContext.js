import { createContext, useContext, useState } from "react";


const SearchContext=createContext()
export function useSearchContext(){return useContext(SearchContext)}

export function SearchProvider({children}){
    const [search,setSearch]=useState('cool')
    const [favs,setFavs]=useState([])
    return(
        <SearchContext.Provider value={{search,setSearch,favs,setFavs}}>
            {children}
        </SearchContext.Provider>

    )

}
