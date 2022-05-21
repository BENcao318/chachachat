import React from 'react';
import PromptInputForm from './PromptInputForm';
import ChatArea from './ChatArea';


export default function Main() {
  return (
    <>
      <div className="flex flex-col flex-1 w-full m-auto px-6 bg-gray-200 dark:bg-gray-900 h-screen">
        <ChatArea />
        <PromptInputForm />
      </div>
    </>
  )
}
