import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { useApplicationData } from '../hooks/useApplicationData';

export default function Home() {
  const { prompt, setPrompt, conversations, handleSubmit, disableInput, engine, setEngine } = useApplicationData();
  return (
    <>
      <div className='flex gap-4 h-screen bg-gray-200 dark:bg-gray-900'>
        <section className='lg:w-1/3'>
          <Sidebar engine={engine} setEngine={setEngine}/>
        </section>
        <section className = 'md:w-4/5'>
          <Main prompt={prompt} setPrompt={setPrompt} conversations={conversations} handleSubmit={handleSubmit} disableInput={disableInput}/>
        </section>
      </div>
    </>
  )
}
