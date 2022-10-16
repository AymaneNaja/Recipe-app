
import { useMemo } from "react"
import { useState,useEffect } from "react"

const APIKEY='231517d460e44328953fbfcffeeececd'
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
    },[query])
   
    return {Data,isErr,isloaded}
}

export default useFetchRecipe