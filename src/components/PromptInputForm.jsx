import React from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
console.log(configuration);
const openai = new OpenAIApi(configuration);

export default function PromptInputForm({ prompt, setPrompt, results, setResults }) {

  async function requestOpenAI(prompt, engineId) {
    const completion = await openai.createCompletion(engineId, {
      'prompt': prompt,
      'temperature': 0.9,
      'max_tokens': 160,
    });
    return completion.data.choices[0].text;
  }

  async function handleSubmit(e) {
    e.preventDefault();


    const engineId = 'text-davinci-002';

    const result = await requestOpenAI(prompt, engineId);

    setResults( prev => [...prev, result]);



  }

  return (
    <div>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Chat with me..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />

        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="mr-2 -ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
          Search
        </button>
      </form>
    </div>
  );
}
