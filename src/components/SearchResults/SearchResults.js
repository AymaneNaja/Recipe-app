import { Default} from 'react-spinners-css';
import { Link, useParams } from 'react-router-dom'
import useFetchRecipe from '../../CustomHooks/useFetchRecipe '
import {RiEmotionUnhappyLine} from 'react-icons/ri'
import { memo } from 'react';

const SearchResults = memo(() => {
    const link=useParams()
    const {Data,isErr,isloaded}=useFetchRecipe(link.query)  
  return (
    <div className='w-full mx-auto flex justify-center mt-10 flex-wrap items-start'>
    <div >
      <h1 className='text-3xl font-bold flex gap-1 mb-6 text-center  justify-center text-slate-600'>{`${Data.length}`} Results For <p className=' first-letter:uppercase'>{link.searchFor} </p>Recipe</h1>
      <div className=' right-2/4 -bottom-3/4 '>
      {!isloaded && !isErr ?<div className='relative  text-center  '><Default color='gray'/><p className='font-bold text-lg text-gray-600'>loading...</p></div>:null}
      </div>
          {!isErr&& isloaded ?
          <>
          <div className='flex w-11/12 flex-wrap gap-3 justify-center items-start m-auto'>
          {Data.map(recipe=>{
            try{
              return(
                <div 
                className='w-fit relative rounded-lg hover:brightness-95 hover:-translate-y-1 bg-gray-300 p-1 
                transition-all' key={recipe.id}>
                <Link to={`/Recipe/${recipe.id}`}>
                  <img className=' brightness-55 rounded-lg max-w-sm
                  ' src={recipe.image}></img>
                  <p className='w-full absolute
                  text-xl bottom-0 py-1 px-3 text-white font-bold text-ellipsis h-fit 
                  backdrop-opacity-70
                  backdrop-blur drop-shadow-xl  rounded-b-lg bg-opacity-25 -translate-x-1'>{recipe.title}</p>
                </Link>
                </div>
              )
            }catch(err){
              console.log(err)
            }
          })}
        
        </div>
        
        </>:<div className='w-full grid justify-center m-auto'><h1 className='font-bold flex items-center justify-center gap-5 text-2xl mx-auto p-10 w-full'><RiEmotionUnhappyLine
          className='btn-scale '
        />unfortunatly we couldn't retrive the right recipe for you </h1>
        </div>}

    </div>
        
    </div>
  )
}
)
export default SearchResults