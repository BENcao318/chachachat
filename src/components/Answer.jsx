import React from 'react';
import { ReactComponent as LoadingSvg } from '../assets/Ellipsis-1.5s-200px.svg';

export default function Answer({ conversation }) {
  return (
    <li className="flex justify-end">
      {conversation.isLoading && 
        (
          <div>
            <LoadingSvg className='w-26'/>
          </div>
        )
      }
      {!conversation.isLoading && 
        (
          <div className="relative max-w-xl px-4 py-2 text-gray-600 text-2xl bg-green-300  rounded-lg shadow-md shadowborder-6 font-poppins hover:bg-green-200 hover:shadow-lg ">
             <div className="flex flex-col w-full justify-around text-lg gap-2">
              <p>AI Engine: <span className="text-md font-normal text-neutral-400">{conversation.engine}</span></p>

              <div className="grid grid-cols-12 gap-3">
                <p className="col-span-11 text-2xl grow italic">{conversation.response}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
                {/* <p>{t('reference')}: <span id="collection-id" data-testid="collection-id" className="text-sm font-normal text-neutral-400">{item.id}</span></p>   */}
                <p className="text-sm italic text-gray-400 flex justify-end lg:justify-start"> posted on: {conversation.postedOn}</p>
              </div>
            </div> 

            {/* <div className="absolute right-2 flex gap-2 justify-between items-end text-sm">
              <BookmarkSvg 
                role="button"
                onClick={() => handleFavorite(item)}
                className={ item.isFavorite ? 'h-6 w-6 hover:fill-red-300 fill-red-400' : 'hover:animate-bounce h-6 w-6 fill-neutral-400 hover:fill-neutral-600'}>
              </BookmarkSvg>      
            </div>   */}

          </div>
        )
      }
    </li>
  )
}
