import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-[#1A2238]' >
        .
       <h1 className='font-extrabold tracking-widest text-white text-9xl' >401</h1>
       <div className="absolute px-3 text-sm text-white bg-black rounded rotate-14"> Page not found ... </div>
       <button
      className='mt-5' >
        <a  className='relative inline-block text-sm text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring' ><span 
        onClick={()=>{navigate(-1)}}
        className='relative block px-8 py-3 bg-[#1A2238] border border-current' > 
            go back  </span>
            </a>
       </button>
    </div>
  )
}

export default NotFound
