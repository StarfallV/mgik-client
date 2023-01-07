import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'

const PurchaseOrderPage: NextPage = () => {
  const pages = [1, 2, 3, 4, 5];
  const [selectedDate, setSelectedDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setCurrentDate(today);
  }, []);

  return (
    <Layout>
      <div className='flex flex-column'>
        <div className='font-bold text-2xl text-gray-700'>
          Purchase Order
        </div>
      </div>

    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            placeholder="Cari..."
            className="form-input py-2 pl-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-2 border-gray-300"
          />
        </div>
        <div className="ml-2 relative rounded-md shadow-sm">
          <input
            type="date"
            value={selectedDate || currentDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            className="form-input py-2 pl-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
      </div>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Buat PO baru
      </button>
    </div>

    <table className="table-auto border-b-2 border-black">
      <thead>
        <tr>
          <th className="px-4 py-2 border-b-2 border-black">No</th>
          <th className="px-4 py-2 border-b-2 border-black">PO Number</th>
          <th className="px-4 py-2 border-b-2 border-black">Outlet</th>
          <th className="px-4 py-2 border-b-2 border-black">Alias</th>
          <th className="px-4 py-2 border-b-2 border-black">Lokasi</th>
          <th className="px-4 py-2 border-b-2 border-black">Tanggal</th>
          <th className="px-4 py-2 border-b-2 border-black">Total Order</th>
          <th className="px-4 py-2 border-b-2 border-black"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border-b-2 border-black">1</td>
          <td className="px-4 py-2 border-b-2 border-black">PO/221228/3</td>
          <td className="px-4 py-2 border-b-2 border-black">PT Reins Marindo Indonesia</td>
          <td className="px-4 py-2 border-b-2 border-black">GyuKaku</td>
          <td className="px-4 py-2 border-b-2 border-black">Jakarta Utara</td>
          <td className="px-4 py-2 border-b-2 border-black">28 Desember 2022</td>
          <td className="px-4 py-2 border-b-2 border-black">736rb</td>
          <td className="px-4 py-2 border-b-2 border-black">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Lihat Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
      
    <div className="mt-8">
      <button className="px-4 py-2 rounded-l-md bg-gray-300 text-gray-700 font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-400">
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 bg-gray-300 text-gray-700 font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-400 ${
            page === 1 ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {page}
        </button>
      ))}
      <button className="px-4 py-2 rounded-r-md bg-gray-300 text-gray-700 font-semibold focus:outline-none focus:shadow-outline hover:bg-gray-400">
        Next
      </button>
    </div>
    </Layout>
  )
}

export default PurchaseOrderPage
