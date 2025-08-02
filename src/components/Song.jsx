import React from 'react'
import Songitems from './Songitems'
import { songsData } from '../assets/assets'
import Navbar from './Navbar'

const Song = () => {
  return (
    <div className='mb-4'>
        <Navbar/>
     <div className='flex flex-row  overflow-auto'>
{
    songsData.map((item,index)=>(<Songitems key={index} image={item.image} desc={item.desc} id={item.id} name={item.name} />))
}
        </div>
     <div className='flex flex-row  overflow-auto'>
{
    songsData.map((item,index)=>(<Songitems key={index} image={item.image} desc={item.desc} id={item.id} name={item.name} />))
}
        </div>
     <div className='flex flex-row  overflow-auto'>
{
    songsData.map((item,index)=>(<Songitems key={index} image={item.image} desc={item.desc} id={item.id} name={item.name} />))
}
        </div>
     <div className='flex flex-row  overflow-auto'>
{
    songsData.map((item,index)=>(<Songitems key={index} image={item.image} desc={item.desc} id={item.id} name={item.name} />))
}
        </div>
        </div>
  )
}

export default Song