
import { useState,useEffect } from "react"
// https://api.spoonacular.com/recipes/random?number=10&tags=${tags},&apiKey=${APIKEY}
const APIKEY='5e5d1abb3d3d482093230b2697a4d10c'
const useFetchRanRecipe = (tags=null) => {
    const URL=` https://api.spoonacular.com/recipes/random?number=10&tags=${tags},&apiKey=${APIKEY}`
    const [Data,setData]=useState([])
    const [isloaded,setIsLoaded]=useState(false)
    const [isErr,setIsErr]=useState(false)

    useEffect(()=>{
        const FetchRecipe=async()=>{
            try{
                const response=await fetch(URL)
                const data=(await response.json())
                if (response.ok){
                    setData(data.recipes)
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
    },[tags])
    return {Data,isErr,isloaded}
}

export default useFetchRanRecipe