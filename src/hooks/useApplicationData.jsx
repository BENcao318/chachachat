import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

export function useApplicationData() {
  const [prompt, setPrompt] = useState('');
  const [answers, setAnswers] = useState([]);

  async function requestOpenAI(prompt, engineId) {
    const completion = await openai.createCompletion(engineId, {
      'prompt': prompt,
      'temperature': 0.6,
      'max_tokens': 160,
    });

    return completion.data.choices[0].text;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const engineId = 'text-curie-001';

    const result = await requestOpenAI(prompt, engineId);

    setAnswers( prev => [...prev, result]);
  }

  return {
    prompt,
    setPrompt,
    answers,
    setAnswers,
    handleSubmit
  }
}
