import React, { useContext } from 'react'
import { ExpenseStore } from '../context/Context'

function ExpenseForm() {
  const { register, handleSubmit, handleInput } = useContext(ExpenseStore)

  return (
    <div className="flex flex-col gap-6 p-4 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold font-mono text-center">Expense Tracker</h1>

      <form 
        onSubmit={handleSubmit(handleInput)}
        className="flex flex-col gap-6 w-full"
      >
        <label className="flex flex-col gap-1 w-full">
          Title
          <input
            {...register('title')}
            className="h-10 w-full border border-gray-400 rounded-sm outline-none pl-3 focus:border-blue-500"
            type="text"
            placeholder="Title"
          />
        </label>

        <label className="flex flex-col gap-1 w-full">
          Category
          <select
            {...register('category')}
            className="h-10 w-full border border-gray-400 rounded-sm outline-none pl-2 bg-white focus:border-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Choose Category</option>
            <option value="Education">Education</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Grocery">Grocery</option>
            <option value="Veggies">Veggies</option>
            <option value="Bills">Bills</option>
          </select>
        </label>

        <label className="flex flex-col gap-1 w-full">
          Amount
          <input 
            {...register('amount')}
            className="h-10 w-full border border-gray-400 rounded-sm outline-none pl-3 bg-white focus:border-blue-500"
            type="number"
            placeholder="Amount"
          />
        </label>

        <input 
          className="h-10 w-full border-2 border-gray-400 rounded-sm hover:cursor-pointer hover:bg-gray-300 hover:text-white transition-colors duration-200"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  )
}

export default ExpenseForm
