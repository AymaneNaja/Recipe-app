import React from 'react'
import { useSearchContext } from '../../Contexts/SearchContext'
import { Link } from 'react-router-dom'
import {TiDelete} from 'react-icons/ti'
const Favorites = () => {
  const {favs,setFavs}=useSearchContext()
  console.log(favs)

  function RemoveFavs(id){
    const UpdatesdFavs=favs.filter(book=>{
      if(book.id!==id){
        return book
      }
      else{
        return
      }
    })
    setFavs(UpdatesdFavs)
  }
  return (
  <>
  
     <div className='search-results flex flex-wrap gap-2 justify-center items-start mx-auto mt-2 '>
    
    {favs.map(book=>{
          try{
              return(
                <Link to={`/book/${book.id}`} className='text-decoration-none w-1/6 space-y-0   
                text-black relative           
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
                  <button 
                  onClick={()=>RemoveFavs(book.id)}
                  className='absolute top-0 right-0  text-xl flex items-center justify-center text-white rounded-full bg-white'><TiDelete
                    className='text-red-600 scale-150 hover:text-black transition-all '
                  /></button>
                </Link>
            )

          }catch(err){
            console.log(err)
          }
            })}
      
    </div>
    </>
  )
}

export default Favorites