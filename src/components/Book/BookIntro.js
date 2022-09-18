import React from "react";


import ReactStars from "react-rating-stars-component";
import { useSearchContext } from "../../Contexts/SearchContext";
import {AiFillCheckCircle} from 'react-icons/ai'
import { useState } from "react";
import {MdFavorite} from 'react-icons/md'
export function BookIntro({
    book
}) {
        const [success,setSuccess]=useState(false)
        const {favs,setFavs}=useSearchContext()
        function AddFavs(){
            setFavs(prev=>[...prev,book])
            setTimeout(()=>{
                setSuccess(true)
            })
            setTimeout(()=>{
                setSuccess(false)
            },3000)
        }

  return <div className="w-2/4 grid items-start space-y-0 h-fit justify-center m-3">
                        <img className="rounded shadow m-1" src={book.volumeInfo.imageLinks.smallThumbnail} />
                        <span className="font-bold ">{book.volumeInfo.title}</span>
                        <span className="font-bold ">By:{[...book.volumeInfo.authors]}</span>
                        <ReactStars
                        count={5}
                        value={book.volumeInfo.averageRating}
                        size={24}
                        activeColor="#ffd700"
                        />
                        <button 
                        onClick={()=>AddFavs()}
                        className="flex items-center justify-center font-bold bg-indigo-700 text-white p-1 rounded-lg mt-2
                        transition-all hover:bg-indigo-900">
                        <MdFavorite />Add To Favorites
                        </button>
                        {success?<p className="
                        w-full flex justify-center items-start
                        ont-bold bg-green-500 text-white p-2 
                        font-bold rounded-lg mt-2 
                        transition-all show-to-hide">
                        <AiFillCheckCircle
                        className='scale-150 m-1'/>succesfully added to favorites</p>:null}

                    </div>;
}
  