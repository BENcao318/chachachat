import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { FaConnectdevelop } from 'react-icons/fa';

export default function ModelSelector({ engine, setEngine }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  function onSelected(e) {
    setEngine(e.target.id);
  }

  return (
    <ul>
      <li className="relative px-6 py-3">
        <button
          className="place-items-center w-full text-xl font-semibold transition-colors duration-150 hover:text-gray-800  dark:hover:text-gray-200"
          onClick={toggleMenu}
          aria-haspopup="true"
        >
          <span className="inline-flex  mx-auto">
            <div className='flex-col  md:space-x-6 lg:space-x-12  justify-between align'>
              <div className='inline-flex'>
                <FaConnectdevelop className='font-extrabold text-cyan-600' size={30}/>
                <span className="ml-4">Choose a model</span>
              </div>
              <p className="text-sm italic text-orange-600">
                <span className="text-gray-600">Curent Model: </span>
                {engine}
              </p>
            </div>

          </span>
          <svg
            className="w-12 h-12 inline-flex ml-8"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            ></path>
          </svg>
        </button>

        <Transition
          show={menuIsOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <ul
            className="form-check w-4/5 p-2 mx-auto space-y-2 overflow-hidden text-lg font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
          >
            <li
              className="px-2 py-1 transition-colors duration-150 space-x-12 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <input className="form-check-input appearance-none rounded-full h-6 w-6 border-2 checked:border-8 border-gray-600 bg-white checked:bg-white-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mx-auto cursor-pointer peer" type="radio" name="option" id="text-davinci-002" onChange={onSelected} checked={engine === 'text-davinci-002'} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="text-davinci-002">
                Davinci
              </label>
            </li>
            <li
              className="px-2 py-1 transition-colors duration-150 space-x-12 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <input className="form-check-input appearance-none rounded-full h-6 w-6 border-2 checked:border-8 border-gray-600 bg-white checked:bg-white-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mx-auto cursor-pointer peer" type="radio" name="option" id="text-curie-001" onChange={onSelected} checked={engine === 'text-curie-001'} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="text-curie-001">
                Curie
              </label>
            </li>
            <li
              className="px-2 py-1 transition-colors duration-150 space-x-12 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <input className="form-check-input appearance-none rounded-full h-6 w-6 border-2 checked:border-8 border-gray-600 bg-white checked:bg-white-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mx-auto cursor-pointer peer" type="radio" name="option" id="text-babbage-001" onChange={onSelected} checked={engine === 'text-babbage-001'} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="text-babbage-001">
                Babbage
              </label>
            </li>
            <li
              className="px-2 py-1 transition-colors duration-150 space-x-12 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <input className="form-check-input appearance-none rounded-full h-6 w-6 border-2 checked:border-8 border-gray-600 bg-white checked:bg-white-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mx-auto cursor-pointer peer" type="radio" name="option" id="text-adda-001" onChange={onSelected} checked={engine === 'text-adda-001'} />
              <label className="form-check-label inline-block text-gray-800" htmlFor="text-adda-001">
                Adda
              </label>
            </li>

          </ul>
        </Transition>

      </li>
    </ul>
  )
}
