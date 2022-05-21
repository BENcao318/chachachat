import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

export default function Sidebar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <aside
        className="z-20 hidden h-screen w-80 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
      >
        <div className="py-4 text-gray-500 dark:text-gray-400 ">
          <h1
            className="ml-6 text-3xl font-bold text-purple-800 dark:text-purple-200 pb-12"
          >
            ChaChaChat
          </h1>
          <ul>
            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-xl font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={toggleMenu}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                  <span className="ml-4">Pages</span>
                </span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <template x-if="isPagesMenuOpen"> */}
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
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                  aria-label="submenu"
                >
                  <li
                    className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <a className="w-full" href="pages/login.html">Login</a>
                  </li>
                  <li
                    className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <a className="w-full" href="pages/create-account.html">
                      Create account
                    </a>
                  </li>
                  <li
                    className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <a className="w-full" href="pages/forgot-password.html">
                      Forgot password
                    </a>
                  </li>
                  <li
                    className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <a className="w-full" href="pages/404.html">404</a>
                  </li>
                  <li
                    className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <a className="w-full" href="pages/blank.html">Blank</a>
                  </li>
                </ul>
              </Transition>
              {/* </template> */}
            </li>
          </ul>
        </div>  
      </aside>
  )
}
