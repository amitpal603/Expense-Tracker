import React, { useContext } from "react";
import { ExpenseStore } from "../context/Context";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

function ExpenseTable() {
  const { FilterDataOption, Total, setSelect, setInputFormData } = useContext(ExpenseStore);

  return (
    <div className="flex flex-col mt-6 px-2 sm:px-4">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow overflow-hidden border border-gray-300 sm:rounded-lg">
            <table className="min-w-full table-auto border-collapse text-sm sm:text-base">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">
                    <select
                      onChange={(e) => setSelect(e.target.value.toLowerCase())}
                      className="rounded border-gray-300 p-1 text-xs sm:text-sm"
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
                  <th className="px-3 sm:px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
                      Amount
                      <div className="flex gap-2 mt-1 sm:mt-0">
                        <FaArrowUpLong
                          className="text-lg hover:cursor-pointer"
                          onClick={() =>
                            setInputFormData((pre) => [...pre].sort((a, b) => a.amount - b.amount))
                          }
                        />
                        <FaArrowDownLong
                          className="text-lg hover:cursor-pointer"
                          onClick={() =>
                            setInputFormData((pre) => [...pre].sort((a, b) => b.amount - a.amount))
                          }
                        />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>

            {/* Scrollable Table Body */}
            <div className="max-h-64 overflow-y-auto">
              <table className="min-w-full table-auto border-collapse text-sm sm:text-base">
                <tbody className="bg-white divide-y divide-gray-200">
                  {FilterDataOption.map((expense, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
                    >
                      <td className="px-3 sm:px-6 py-4 font-bold text-gray-800 break-words">
                        {expense.title}
                      </td>
                      <td className="px-3 sm:px-6 py-4 font-bold text-gray-800">
                        {expense.category}
                      </td>
                      <td className="px-3 sm:px-6 py-4 font-bold text-gray-800">
                        ₹{expense.amount}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-200 font-semibold">
                    <td className="px-3 sm:px-6 py-4">Total</td>
                    <td></td>
                    <td className="px-3 sm:px-6 py-4">₹{Total}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3">
              <button
                className="w-full sm:w-auto px-3 py-2 border-2 rounded-md hover:cursor-pointer hover:bg-gray-200"
              >
                Clear Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;
