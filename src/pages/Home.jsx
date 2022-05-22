import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { useApplicationData } from '../hooks/useApplicationData';
import Header from '../components/Header';
import Modal from '../components/Modal';


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
          (  <Modal setShowModal={setShowModal} />
          ) : null
        }
        

      </div>
    </>
  )
}
