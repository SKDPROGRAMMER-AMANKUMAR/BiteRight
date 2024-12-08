import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../Redux/Slices/SearchSlice.jsx'
const Navbar = () => {
  const dispatch = useDispatch() // Using dispatch hook to dispatch actions
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
      <div>
        <h3 className='text-xl font-bold text-gray-600'>
         {new Date().toUTCString().slice(0,16)}
        </h3>
        <h1 className='text-2xl font-bold'>BiteRight</h1>
      </div>
      <div>
        <input type="search"
        name='search'
        placeholder='Search...'
        autoComplete='off'
        onChange={(e)=>dispatch(setSearchTerm(e.target.value))}  // Dispatching action to update search term
        className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
        />
      </div>
    </nav>
  )
}

export default Navbar
