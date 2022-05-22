import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import { v4 as uuidv4 } from 'uuid';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

export function useApplicationData() {
  const [prompt, setPrompt] = useState('');
  const [conversations, setConversations] = useState([]);
  const [disableInput, setDisableInput] = useState(false);
  const [engine, setEngine] = useState('text-davinci-002');

  async function requestOpenAI(prompt, engineId) {
    const completion = await openai.createCompletion(engineId, {
      'prompt': prompt,
      'temperature': 0.6,
      'max_tokens': 160,
    });

    return completion;
  }

  

  async function handleSubmit(e) {
    e.preventDefault();

    const question = {id: uuidv4(), prompt: prompt, postedOn: new Date().toUTCString()};
    let answer = {id: uuidv4(), response:'', isLoading: true };
    setConversations(prev => [ ...prev, question ]);
    setConversations(prev => [ ...prev, answer ]);
    setDisableInput(true);

    const result = await requestOpenAI(prompt, engine);
    answer = {...answer, prompt: prompt, response:result.data.choices[0].text, postedOn: new Date().toUTCString(), engine, isSaved: false, isLoading: false };
    console.log(result.data);
    setPrompt('');
    setDisableInput(false);
    setConversations( prev => [...prev.slice(0, prev.length - 1), answer]);
    
  }

  return {
    prompt,
    setPrompt,
    conversations,
    setConversations,
    handleSubmit,
    disableInput,
    engine,
    setEngine
  }
}

