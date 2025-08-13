import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

function App() {
  return (
    <div className='flex  flex-col justify-center  mt-8 gap-30 items-center md:flex' >
      <ExpenseForm></ExpenseForm>
      <ExpenseTable/>
    </div>
  )
}

export default App
