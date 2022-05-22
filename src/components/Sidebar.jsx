import React from 'react';
import ModelSelector from './ModelSelector';
import PresetQuestions from './PresetQuestions';


export default function Sidebar({ engine, setEngine }) {




  return (
    <aside
      className="z-20 hidden items-center h-screen w-full overflow-y-auto bg-white dark:bg-gray-800 lg:block lg:w-full flex-shrink-0"
    >
      <div className="py-4 text-gray-500 dark:text-gray-400 ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-lime-600 dark:text-purple-200 pb-12">
            ChaChaChat
          </h1>
        </div>
        <div className='shadow-md border mx-2'>
          <ModelSelector engine={engine} setEngine={setEngine} />
        </div>
        <div className='mt-12 text-center'>
          <p className='text-2xl font-bold mb-2 text-lime-600'>
            Preset Questions
          </p>
          <div className='text-left shadow py-6 mx-2 bg-gray-100'>
            <PresetQuestions/>
          </div>
        </div>
        <div className='mt-12 text-center'>
          About Me
        </div>
      </div>
      
    </aside>
  )
}
