import React, { children,createContext, useState } from 'react'
import { useForm } from 'react-hook-form'


export const ExpenseStore = createContext()

 export function Context({children}) {
    const [InputFormData,setInputFormData] = useState([])
    const {register,handleSubmit,reset} = useForm()
    const [select,setSelect] = useState("")
    

    const handleInput = (data) => {
    setInputFormData([...InputFormData,data])
    reset()
  }
      // filter in table to show data in option.

      const FilterDataOption = InputFormData.filter((expense) => {
        const searchTerm = select

        if(searchTerm === "all"){
          return InputFormData
        }
      return  expense.category.toLowerCase().includes(searchTerm)
      })
    // Total Amount logic
    const Total = FilterDataOption.reduce((Acu,Curr) => (Acu + Number(Curr.amount)),0 )
    const value = {
        register,handleSubmit,handleInput,reset,InputFormData,Total,select,setSelect,FilterDataOption,setInputFormData
    }
  return  <ExpenseStore.Provider value={value}>{children}</ExpenseStore.Provider>
}

export default Context
