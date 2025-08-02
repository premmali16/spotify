import React from 'react'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div className='mb-4'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center mt-10'>
         {/* \card for user detail  */}
         <div className='bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-md'>
           <h2 className='text-xl font-bold mb-2'>User Details</h2>
           <p className='text-sm'>Name: PREM MALI</p>
           <p className='text-sm'>Email: prem.mali@example.com</p>
           <p className='text-sm'>Location: Mumbai, India</p>
         </div>

    </div>
    </div>
  )
}

export default Profile