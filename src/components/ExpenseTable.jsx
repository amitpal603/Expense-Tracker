import React from 'react';

function ExpenseTable() {
  return (
    <div className="flex flex-col mt-4">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full table-auto border-separate border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    <select
                      className="rounded border-gray-300 p-2"
                    >
                      <option value="All">All</option>
                      <option value="Education">Education</option>
                      <option value="Food">Food</option>
                      <option value="Transport">Transport</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Veggies">Veggies</option>
                    </select>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap">Book</td>
                    <td className="px-6 py-4 whitespace-nowrap">Education</td>
                    <td className="px-6 py-4 whitespace-nowrap">400</td>
                  </tr>
                <tr className="bg-gray-200 font-semibold">
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                  </td>
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
