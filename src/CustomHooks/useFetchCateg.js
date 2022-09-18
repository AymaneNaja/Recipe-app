import { useEffect,useState } from 'react'


const APIKEY='AIzaSyDrP5X1bOwHrRP3PUiZXEjSqguTH8ppEKw'
const useFetchCateg = ({category,orderby='newest',filter='ebooks'}) => {
    const URL=`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&printType=books&maxResults=40&langRestrict=en&orderBy=${orderby}&key=${APIKEY}`
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
                setData(data.items)
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

export default useFetchCateg