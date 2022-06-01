import React, { useEffect, useRef } from 'react';
import Answer from './Answer';
import Question from './Question';


export default function ChatArea({ conversations, isLoading }) {
  const messagesEndRef = useRef(null);

  function scrollToBottom() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [conversations, isLoading])

  const chatList = conversations.map(conversation => {
    return conversation['response'] !== undefined ? <Answer key={conversation.id} conversation={conversation} isLoading={isLoading} /> : <Question key={conversation.id} conversation={conversation} />
  })
  return (
    <>
      <div className="flex overflow-y-auto h-full items-end">
        <ul className="space-y-6 w-5/6 mx-auto max-h-full ">
          {chatList}
        <div ref={messagesEndRef} /> 
        </ul>
      </div>
    </>
  )
}
