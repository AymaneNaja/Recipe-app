import { useEffect,useState } from 'react'


const APIKEY='AIzaSyDrP5X1bOwHrRP3PUiZXEjSqguTH8ppEKw'
const useSearchBook = (title=null) => {
    const URL=`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&langRestrict=en&maxResults=40&key=${APIKEY}`
    // 
    const [Data,setData]=useState()
    const [Loading,setLoading]=useState(true)
    const [Err,setErr]=useState(false)
    const [ErrMsg,setErrMsg]=useState('')
    // 
    useEffect(()=>{
        const fetchData=async()=>{
        try{
            setLoading(true)
            const response=(await fetch(URL))
            const data= (await response.json())
            if(response.ok &&'items'in data ){
                setData(data.items)
                setErr(false)
            }
            if (!response.ok |'items' in data==false){
                setErr(true)
            }
        }
        catch(err){
            setErrMsg(err)
        }finally{
            setLoading(false)
        }
        }
        fetchData()
    },[])

  return {Data,Loading,Err,ErrMsg,setErr}
}

export default useSearchBook;