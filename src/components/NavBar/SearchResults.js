

import React from 'react'
import { useParams } from 'react-router-dom'
import useSearchBook from '../../CustomHooks/useSearchBook'
import Spinner from 'react-bootstrap/Spinner';
import {Link} from 'react-router-dom'

const SearchResults = () => {
    const search=useParams()
    const {Data,Loading,Err,setErr}=useSearchBook(search.title)
    console.log(Data)
  return (
    <div>
    {Loading?
    <div className='flex justify-center items-center ' ><Spinner  animation="grow"/></div>
    :null}
    {!Loading && !Err?
    <div className='search-results flex flex-wrap gap-2 justify-center items-start mx-auto mt-10  '>
        {Data.map(book=>{
          try{
      
              return(
                <Link to={`/book/${book.id}`} className='text-decoration-none w-1/6 space-y-0   
                text-black            
                 font-semibold text-base'>
                 <div className='
                 grid justify-center items-start
                 hover:text-white
                 hover:bg-blue-700 
                 p-2
                 transition-all  rounded-lg'>
                    <img className='book-img rounded-lg shadow-lg my-1' 
                    src={book.volumeInfo.imageLinks.thumbnail}/>
                      <p >{book.volumeInfo.title}</p>
                      <p>{[...book.volumeInfo.authors]}</p>
                   </div>
                </Link>
            )

          }catch(err){
            console.log(err)
          }
            })}
    </div>
    :null}
    {Err?
    <div className='flex justify-center items-center'>
      <h1>Counldn't find the book you're looking for try again...</h1>

    </div>
    :null}
    </div>
  )
}


export default SearchResults