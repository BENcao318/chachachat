import React from 'react';
import ModelSelector from './ModelSelector';
import PresetQuestions from './PresetQuestions';
import { ReactComponent as QuestionIcon } from '../assets/question.svg';
import { ReactComponent as ChatIcon } from '../assets/chat.svg';


export default function Sidebar({ engine, setEngine, showSidebar, setShowSidebar, setPrompt, setShowModal }) {


  return (
    <aside
      className={'items-center h-screen w-full overflow-y-auto bg-white dark:bg-gray-800 lg:block lg:w-full flex-shrink-0 '}
    >
      <div className="py-4 text-gray-500 dark:text-gray-400 ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-lime-600 dark:text-lime-200 pb-12">
            <ChatIcon className='w-12 inline mr-4'/>
            ChaChaChat
          </h1>
        </div>
        <div className='shadow-md border mx-2'>
          <ModelSelector engine={engine} setEngine={setEngine} />
        </div>
        <div className='mt-12 text-center'>
          <p className='text-2xl font-bold mb-2 text-lime-600'>
            <QuestionIcon className='inline w-8 mr-4'/>
            Preset Questions
          </p>
          <div className='text-left shadow py-6 mx-2 bg-gray-100'>
            <PresetQuestions setPrompt={setPrompt} setShowSidebar={setShowSidebar} />
          </div>
        </div>
        <div className='mt-12 text-center'>
          <button type="button" className="px-6
              py-2.5
              bg-emerald-600
              text-white
              font-medium
              text-2xl
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-emerald-800 hover:shadow-lg
              focus:bg-emerald-800 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-emerald-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
            onClick={() => setShowModal(true)}>
                      About Me
          </button>
        </div>

      </div>



    </aside>
  )
}
