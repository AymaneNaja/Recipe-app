
import React, { useState,useContext} from 'react'
import { createContext } from 'react'


const UserContext=createContext()

export function useUser(){
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [name,setName]=useState('aymane')
    const [age,setAge]=useState(20)
    return (
        <UserContext.Provider value={{name,age}}>
            {children}
        </UserContext.Provider>
    )
    }

