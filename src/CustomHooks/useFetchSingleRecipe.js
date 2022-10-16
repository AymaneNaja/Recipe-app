
import { useState,useEffect } from "react"


// 5e5d1abb3d3d482093230b2697a4d10c
// 231517d460e44328953fbfcffeeececd
const APIKEY='5e5d1abb3d3d482093230b2697a4d10c'
const useFetchSingleRecipe = (id=null) => {
    const URL=`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`
    const [Data,setData]=useState([])
    const [isloaded,setIsLoaded]=useState(false)
    const [isErr,setIsErr]=useState(false)
   useEffect(()=>{
        const FetchRecipe=async()=>{
            try{
                const response=await fetch(URL)
                const data=(await response.json())
                
                console.log(data)
                if (response.ok){
                    setData([data])
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
    },[URL])
    return {Data,isErr,isloaded}
}

export default useFetchSingleRecipe