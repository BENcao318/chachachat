import React from "react";

export default function PromptInputForm({ prompt, setPrompt, handleSubmit }) {

  return (
    <div className="h-1/6 content-center">
      <form className="flex w-5/6 mb-2 mt-12 m-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg h-20 focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          placeholder="Chat with me..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />

        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-6 font-bold text-xl bg-gradient-to-r from-blue-400 to-green-500  rounded-lg border h-20 border-purple-700 hover:from-pink-600 hover:to-yellow-600 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-purple-300 focus:shadow-xl dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
