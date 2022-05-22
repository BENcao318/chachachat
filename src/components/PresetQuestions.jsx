import React from 'react';
import PresetQuestion from './PresetQuestion';

const questions = [
  'Hello, who are you?',
  'Translate thanks into French',
  'How many people are in Canada?',
  'Write a tagline for a coffee shop.',
  'How to make a roast chicken?',
  'What is Shopify?'
]

export default function PresetQuestions({ setPrompt, setShowSidebar }) {
  const presetQuestions = questions.map((question, index) => <PresetQuestion key={index} question={question} setPrompt={setPrompt} setShowSidebar={setShowSidebar}/>)

  return (
    <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 grid-rows-3'>
      {presetQuestions}
    </div>
  )
}
