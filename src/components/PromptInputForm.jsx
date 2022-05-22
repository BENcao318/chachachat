import React from "react";

export default function PromptInputForm({ prompt, setPrompt, handleSubmit, disableInput }) {

  return (
    <div className="h-1/6 content-center">
      <form className="flex w-full lg:w-5/6 mb-2 mt-12 m-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg h-20 focus:ring-lime-500 focus:border-lime-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="Chat with me..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          disabled={disableInput}
        />

        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-6 font-bold text-xl bg-gradient-to-r from-blue-400 to-green-500  rounded-lg border h-20 border-lime-700 hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg hover:-translate-y-1 focus:ring-4 focus:outline-none focus:ring-lime-300 focus:shadow-xl dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 transition ease-in-out"
          disabled={disableInput}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
