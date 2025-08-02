import React from 'react'
import Navbar from './Navbar'

const Podcasts = () => {
  return (
    <div className='mb-4'>
        <Navbar/>
    <div className='flex flex-col items-center justify-center mt-10'>
        Recently no podcasts are added.
        <p className='text-center text-2xl font-bold mt-10'>Stay Tuned!</p>
        <p className='text-center text-sm mt-2'>We are working on adding new podcasts for you.</p>
        <p className='text-center text-sm mt-2'>Please check back later.</p>
        <p className='text-center text-sm mt-2'>Thank you for your patience!</p>
        <p className='text-center text-sm mt-2'>- Spotify Team</p>
    </div>
    </div>
  )
}

export default Podcasts