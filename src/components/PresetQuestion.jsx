import React from 'react'

export default function PresetQuestion({ question, setPrompt, setShowSidebar }) {
  function handleClick() {
    setPrompt(question);
    setShowSidebar(false);
    
  }

  return (
    <button  className="realtive w-full text-md h-fit border-2 border-neutral-200 rounded-lg flex justify-between 
    gap-2 shadow-md hover:border-lime-600 hover:shadow-xl dark:bg-gray-800 dark:text-white p-2 cursor-pointer bg-white" onClick={handleClick}>
        {question}
    </button>
  )
}
