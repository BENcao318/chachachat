import React from 'react';
import PresetQuestion from './PresetQuestion';

const questions = [
  'What\'s your name?', 
  'Translate hello to Chinese', 
  'How many states are in the USA?', 
  'What music do you like?',
  'How do you make chicken noodle soup?',
  'What\'s the name of the prime minister of Canada?'
]

export default function PresetQuestions() {
  const presetQuestions = questions.map((question, index) => <PresetQuestion key={index} question={question} />)

  return (
    <div className='grid gap-4 grid-cols-2 grid-rows-3'>
      {presetQuestions}
    </div>
  )
}
