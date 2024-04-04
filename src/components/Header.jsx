import React, { useState } from 'react'

const Header = () => {
    

  
  return (
    <>
      <nav className="bg-white-800 p-4">
      <div className=" mx-auto flex flex-wrap items-center justify-between shadow">
        
        <div className=''>
          
          <a href="#" className="text-orange-400 text-2xl font-semibold">Ola <span className='text-green-500'>Pool</span></a>
        </div>
        
        
        <div className="flex flex-wrap justify-end items-center">
          
          <button className="text-white block lg:hidden focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
            </svg>
          </button>

          
          <div className="hidden lg:flex lg:items-between lg:w-auto">
            <a href="#" className="text-gray-600 px-4 py-2">Messages</a>
            <div>
                <input type="text" className='border rounded p-4' placeholder='Maya '/>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
