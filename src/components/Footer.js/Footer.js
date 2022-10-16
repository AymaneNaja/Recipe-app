

import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full h-full  flex justify-center  bg-gray-800 relative  bottom-0 mt-20  display-none text-white font-semibold gap-2 p-2'>
        <div className='w-2/4 ml-16' >
            <h1 className='purple-grad text-3xl font-bold '>
                About
            </h1>
            <p className=''>_ this a website made to give the user the ability to find meals that fit there goals also avoiding ingredients they cannot tolerate</p>
            <p>_ the user can also find suggestion based on the cuisines of other countries and discover new tasty healthy meals that they might not have heard of </p>
        </div>
        <div className='w-2/4 mr-16'>
            <h1 className='purple-grad text-3xl font-bold'>
                Contacts
            </h1>
            <p>here are various ways of which you can use to learn more about the develeper</p>
            <div className='flex justify-center items-start scale-175  m-2'>
            <FaFacebookSquare />
            <AiFillGithub/>
            <AiOutlineInstagram/>
            <AiOutlineLinkedin/>

            </div>

        </div>
    </div>
  )
}

export default Footer