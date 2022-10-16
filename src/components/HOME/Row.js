import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react'
import useFetchRanRecipe from '../../CustomHooks/useFetchRanRecipe';
import '@splidejs/splide/css/sea-green';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Link } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import { Spinner } from 'react-bootstrap';
import { Default, Heart } from 'react-spinners-css';
import {RiEmotionUnhappyLine} from 'react-icons/ri'

const Row = React.memo(({tags}) => {
  const splideOptions= {
  arrows:false,
  type   : 'loop',
  drag   : 'free',
  focus  : 'start',
  perPage: 3,
  gap:10,
  autoWidth:true,
  padding:'0.5em',
  }
    const {Data,isErr,isloaded}=useFetchRanRecipe(tags)
    console.log(Data)
  return (
    <div className='bg-slate-100'>
    <div className='w-full m-auto grid h-fit gap-4 my-6  relative '>
        <p className=' formal-text  font-bold text-3xl absolute top-2 left-10 text-slate-500 '>Top Selection of {tags}:</p>
        {!isErr&&!isloaded?<div className='text-center relative py-16'><Default className='text-center' color='gray'/><p className='font-bold text-lg text-gray-600'>loading...</p></div>:null}
        {!isErr&&isloaded?
        <Splide
        options={splideOptions}
         aria-label="My Favorite Images">
            {Data.map(recipe=>{
              try{
                return(
                <SplideSlide key={recipe.id}>
                  <Link to={`/Recipe/${recipe.id}`}>
                  <div className='relative hover:-translate-y-0.5 transition-all  ' >
                  <img className=' w-72
                  bottom-shadow rounded-lg border-6 border-slate-300
                   hover:brightness-75 transition-all ' src={recipe.image}/>
                  <div className='w-72 absolute bottom-0  font-bold  p-2 drop-shadow-lg text-base 
                  w-62 text-ellipsis  text-white text-bold
                bg-black bg-opacity-30 rounded-b-lg   '>
                  <p className='w-full'>{recipe.title}</p>
                  </div>
                  </div> 
                  </Link>
                </SplideSlide>

                )
              }catch(err){
                console.log(err)
              }
            })}
        </Splide>
        :<p className='text-center text-3xl font-bold text m-20 flex gap-5 items-center hidden'><RiEmotionUnhappyLine
          className='btn-scale '
        />couldnt laod the data...</p>}
    </div>
    </div>
  )
})
export default Row