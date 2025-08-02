// import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { songsData } from '../assets/assets';
const Search = () => {
    // This component will handle the search functionality
const [search, setSearch] = useState('');
const handleSearch = (e) => {
    setSearch(e.target.value);
}

  return (
    <div className='mb-4'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center mt-10'>
          <h2 className='text-xl font-bold mb-2'>Search</h2>
          <input type="text" placeholder="Search..." className='bg-gray-800 p-2 rounded-lg w-full max-w-md' value={search} onChange={handleSearch} />
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <h2 className='text-xl font-bold mb-2'>Search Results</h2>
          
        </div>
    </div>
  )
}

export default Search