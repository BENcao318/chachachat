import React from "react";

export default function PromptInputForm({ prompt, setPrompt, handleSubmit, disableInput }) {

  return (
    <div className="h-1/6 content-center">
      <form className="flex w-full lg:w-5/6 mb-2 mt-12 m-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-white border border-gray-300 text-gray-900 lg:text-2xl text-xl font-medium rounded-2xl h-16 focus:ring-offset-6 focus:ring-6 ring-lime-600 focus:border-lime-500 block w-full pl-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="Chat with me..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          disabled={disableInput}
        />

        <button className="relative ml-2 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group" disabled={disableInput}>
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-emerald-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative -translate-x-2 w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white text-2xl">Submit</span>
        </button>
      </form>
    </div>
  );
}
