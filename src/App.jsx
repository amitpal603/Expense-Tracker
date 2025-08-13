import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

function App() {
  return (
    <div className="flex flex-col items-center gap-8 px-4 mt-8 lg:flex-row lg:items-start lg:justify-center">
      {/* Form */}
      <div className="w-full max-w-md">
        <ExpenseForm />
      </div>

      {/* Table */}
      <div className="w-full max-w-3xl">
        <ExpenseTable />
      </div>
    </div>
  )
}

export default App
