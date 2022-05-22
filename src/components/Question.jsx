import React from 'react';
import { ReactComponent as QuestionMarkIcon } from '../assets/question-mark.svg';



export default function Question({ conversation }) {
  return (
    <li className="flex justify-start">
      <div className="relative max-w-xl px-4 py-2 text-gray-600 bg-white text-2xl rounded-lg shadow shadowborder-6 font-mono hover:shadow-lg">
        <div className="grid grid-cols-12 gap-3">
          <p className="col-span-11 text-2xl grow font-medium flex items-center">
            <QuestionMarkIcon className='inline-block w-6 h-6 mr-2 self-center'/>
            {conversation.prompt}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
          <p className="text-sm italic text-gray-400 flex justify-end lg:justify-start"> posted on: {conversation.postedOn}</p>
        </div>
      </div>
    </li>
  )
}
