import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <div className='flex gap-4 h-screen bg-gray-200 dark:bg-gray-900'>
        <section>
          <Sidebar/>
        </section>
        <section className = 'w-full'>
          <Main/>
        </section>
      </div>
    </>
  )
}
