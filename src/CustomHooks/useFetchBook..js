import { useEffect,useState } from 'react'
import React from 'react'

const APIKEY='AIzaSyDrP5X1bOwHrRP3PUiZXEjSqguTH8ppEKw'
const useFetchBook = (bookId) => {
    const URL=`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${APIKEY}`
    const [Data,setData]=useState()
    const [Loading,setLoading]=useState(true)
    const [Err,setErr]=useState(false)
    const [ErrMsg,setErrMsg]=useState('')
    useEffect(()=>{
        const fetchData=async()=>{
        try{
            setLoading(true)
            const response=(await fetch(URL))
            const data= (await response.json())
            if(response.ok){
                setData([data])
                setErr(false)
            }
            if (!response.ok){
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

  return {Data,Loading,Err,ErrMsg}
}

export default useFetchBook;