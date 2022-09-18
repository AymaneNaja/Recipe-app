
import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Credits = () => {
  return (
    <div>
        <h1>
            Credits
        </h1>
        <p  className='w-3/4'>
            this website was made by aymane naja 
            a junior react dev that is happy to learn and discover new technologies
        </p>
        <p className='flex items-center gap-1'><AiOutlineCopyrightCircle/>Copyright The Librarian 2022 </p>
    </div>
  )
}

export default Credits