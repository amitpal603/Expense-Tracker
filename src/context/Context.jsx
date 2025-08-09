import React, { children,createContext, useState } from 'react'
import { useForm } from 'react-hook-form'


export const ExpenseStore = createContext()

 export function Context({children}) {
    const [InputFormData,setInputFormData] = useState([])
    const {register,handleSubmit,reset} = useForm()

    const value = {
        register,handleSubmit,setInputFormData
    }
  return  <ExpenseStore.Provider value={value}>{children}</ExpenseStore.Provider>
}

export default Context
