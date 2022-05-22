import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { useApplicationData } from '../hooks/useApplicationData';
import Header from '../components/Header';


export default function Home() {
  const { prompt, setPrompt, conversations, setConversations, handleSubmit, disableInput, engine, setEngine } = useApplicationData();
  const ref = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 992){
        setShowSidebar(false)
      }
    }
    window.addEventListener("resize", handleResize );
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  })

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowSidebar(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  })

  useEffect(() => {
    if(localStorage.conversations) {
      const conversationsArr = JSON.parse(localStorage.conversations);
      setConversations(conversationsArr);
    }
  },[])

  return (
    <>
      <div className='flex h-screen bg-gray-200 dark:bg-gray-900'>
        <section className={`z-40 lg:w-1/4 transition ease-in-out duration-300 ${showSidebar ? 'translate-x-0 fixed' : '-translate-x-full lg:translate-x-0 w-0'}`} ref={ref}>
          <Sidebar engine={engine} setEngine={setEngine} showSidebar={showSidebar} setShowSidebar={setShowSidebar} setPrompt={setPrompt} setShowModal={setShowModal}/>
        </section>
        <section className='lg:w-3/4 w-screen'>
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
          <Main prompt={prompt} setPrompt={setPrompt} conversations={conversations} handleSubmit={handleSubmit} disableInput={disableInput} />
        </section>

        {showModal ? 
          (       <>
                    <div
                      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                      <div className="relative my-6 mx-auto max-w-3xl w-1/3">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                          <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-4xl font-semibold">
                              Ben Cao
                            </h3>
                            <div>
                              <p> Aurora, Ontario, Canada </p>
                              <p> bc6016@mun.ca </p>
                            </div>
                          </div>

                          <div className="relative p-6 flex-auto space-y-2">
                            <p className='font-semidbold text-xl font-medium'>Experience:</p>
                            <p className="my-4  leading-relaxed">
                              Electrical Engineer
                              <span className='text-gray-500 text-sm italic'> 06/2019 to Current</span>
                            </p>
                          </div>

                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close 
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
 
          ) : null
        }
        

      </div>
    </>
  )
}
