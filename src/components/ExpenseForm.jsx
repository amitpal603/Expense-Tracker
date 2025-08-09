import React, { useContext } from 'react'
import { ExpenseStore } from '../context/Context'

function ExpenseForm() {
  const { register, handleSubmit, setInputFormData } = useContext(ExpenseStore)

  return (
    <div className="flex flex-col gap-6 p-4">
      <h1 className="text-2xl font-bold font-mono">Expense Tracker</h1>

      <form className="flex flex-col gap-8">
        
        <label className="flex flex-col gap-1">
          Title
          <input
            className="h-10 w-150 border border-gray-400 rounded-sm outline-none pl-3 focus:border-blue-500"
            type="text"
            placeholder="Title"
          />
        </label>

       
        <label className="flex flex-col gap-1">
          Category
          <select
            className="h-10 w-150 border border-gray-400 rounded-sm outline-none pl-2 bg-white focus:border-blue-500"
            name="Category"
            defaultValue=""
          >
            <option value="" disabled>
              Choose Category
            </option>
            <option value="Education">Education</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value=" Grocery">Grocery</option>
            <option value=" Veggies">Veggies</option>
          </select>
        </label>

        <label htmlFor=""
        className='flex flex-col gap-1'
        >Amount
          <input 
           className="h-10 w-150 border border-gray-400 rounded-sm outline-none pl-2 bg-white focus:border-blue-500"
          type="number" placeholder='Amount' />
        </label>

        <input 
        className='h-10 w-150 border-2 border-gray-400 rounded-sm hover:cursor-pointer hover:bg-gray-300 hover:text-white'
        type="submit" value="Add" />
      </form>
    </div>
  )
}

export default ExpenseForm