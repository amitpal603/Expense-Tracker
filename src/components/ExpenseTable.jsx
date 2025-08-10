import React, { useContext, useState, useMemo } from "react";
import { ExpenseStore } from "../context/Context";

function ExpenseTable() {
  const { FilterDataOption,Total,setSelect } = useContext(ExpenseStore);
  
  return (
    <div className="flex flex-col mt-6">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow overflow-hidden border border-gray-300 sm:rounded-lg">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <select
                    onChange={(e) => setSelect(e.target.value.toLowerCase())}
                      className="rounded border-gray-300 p-1 text-sm"
                    >
                      <option value="All">All</option>
                      <option value="Education">Education</option>
                      <option value="Food">Food</option>
                      <option value="Transport">Transport</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Veggies">Veggies</option>
                      <option value="Bills">Bills</option>
                    </select>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
               {FilterDataOption.map((expense, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                      {expense.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                      {expense.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold">
                      ₹{expense.amount}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-200 font-semibold">
                  <td className="px-6 py-4">Total</td>
                  <td></td>
                  <td className="px-6 py-4">₹{Total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;
