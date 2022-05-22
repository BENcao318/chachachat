import React from 'react';
import { ReactComponent as LoadingSvg } from '../assets/Ellipsis-1.5s-200px.svg';
// import {BsGearWideConnected} from 'react-icons/bs';
import { ReactComponent as GearIcon } from '../assets/settings-cog-options.svg';
import { ReactComponent as OpenAIIcon } from '../assets/openai.svg';
import { FaConnectdevelop } from 'react-icons/fa';

export default function Answer({ conversation }) {
  return (
    <li className="flex justify-end">
      {conversation.isLoading &&
        (
          <div>
            <LoadingSvg className='w-26' />
          </div>
        )
      }
      {!conversation.isLoading &&
        (
          <div className="relative max-w-xl px-4 py-2 text-gray-600 bg-green-300  rounded-lg shadow-md shadowborder-6 font-mono hover:bg-green-200 hover:shadow-lg">
            <div className="flex flex-col w-full justify-around text-lg gap-2">
              <p className='font-semibold '>
                 AI Engine: <span className="text-md font-normal text-neutral-400"> <FaConnectdevelop className='w-5 inline mr-2 font-extrabold text-cyan-600' />
                  {conversation.engine}</span>
              </p>
              <div className="grid grid-cols-12 gap-3">
                <p className="col-span-11 text-2xl grow font-semibold">
                  <OpenAIIcon className='inline w-6 mr-2' /> 
                  {conversation.response}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
                <p className="text-sm  text-neutral-400 flex justify-end lg:justify-start"> posted on: {conversation.postedOn}</p>
              </div>
            </div>

          </div>
        )
      }
    </li>
  )
}
