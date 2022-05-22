import React from 'react'

export default function Header({ showSidebar, setShowSidebar }) {
  return (
    <div className='flex lg:hidden  fixed z-20 bg-gray-200 w-full h-1/8 space-x-24'>
      <button
        className="p-1 ml-6 rounded-md focus:outline-none focus:shadow-outline-purple hover:text-gray-400"
        aria-label="Menu"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <svg
          className="w-12 h-12"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          ></path>
        </svg>
      </button>
      <span className='text-4xl self-center text-lime-600 font-bold'>
        ChaChaChat
      </span>
      <span>

      </span>
    </div>
  )
}
