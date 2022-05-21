import React from 'react'

export default function ChatArea() {
  return (
    <>
      <div className="flex h-5/6 overflow-y-auto items-end">
        <ul class="space-y-6 w-5/6 mx-auto">
          <li class="flex justify-start">
            <div class="relative max-w-xl px-4 py-2 text-gray-600 bg-gray-200 rounded shadow border-2 border-orange-200">
              <span class="block">Hi</span>
            </div>
          </li>
          <li class="flex justify-end">
            <div class="relative max-w-xl px-4 py-2 text-gray-600 bg-gray-100 rounded shadowborder-2 border-2 border-green-200">
              <span class="block">Hiiii</span>
            </div>
          </li>
          <li class="flex justify-end">
            <div class="relative max-w-xl px-4 py-2 text-gray-600 bg-gray-100 rounded shadow border-2 border-green-200">
              <span class="block">how are you?</span>
            </div>
          </li>
          <li class="flex justify-start">
            <div class="relative max-w-xl px-4 py-2 text-gray-600 bg-gray-200 rounded shadow border-2 border-orange-200">
              <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
