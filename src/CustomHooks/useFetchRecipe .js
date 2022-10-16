
import { useMemo } from "react"
import { useState,useEffect } from "react"


// 5e5d1abb3d3d482093230b2697a4d10c
// 231517d460e44328953fbfcffeeececd
const APIKEY='5e5d1abb3d3d482093230b2697a4d10c'
const useFetchRecipe = (query=null) => {
    const URL=`https://api.spoonacular.com/recipes/complexSearch?${query}&number=50&apiKey=${APIKEY}`
    const [Data,setData]=useState([])
    const [isloaded,setIsLoaded]=useState(false)
    const [isErr,setIsErr]=useState(false)

    useEffect(()=>{
        const FetchRecipe=async()=>{
            try{
                const response=await fetch(URL)
                const data=(await response.json())
                if (response.ok){
                    setData(data.results)
                }
                if(!response.ok) {
                    setIsErr(true)
                }
            }catch(err){
                console.log(err)
            }finally{
                setIsLoaded(true)
            }
            }
            FetchRecipe()
    },[])
   
    return {Data,isErr,isloaded}
}

export default useFetchRecipe