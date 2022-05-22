import React from 'react'

export default function Modal({setShowModal}) {
  return (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-2"
              >
                <div className="relative my-6 mx-auto max-w-3xl lg:w-auto">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-4xl font-semibold">
                        Ben Cao
                      </h3>
                      <div>
                        <p> Aurora, Ontario, Canada </p>
                        <p> bc6016@mun.ca </p>
                      </div>
                    </div>

                    <div className="relative p-6 flex-auto space-y-2">
                      <p className='font-semidbold text-2xl font-medium mb-4'>Experience:</p>
                      <p className="my-4  leading-relaxed">
                        Electrical Engineer
                        <span className='text-gray-500 text-sm italic pl-2'> 06/2019 to Present</span>
                        <p className='font-medium'>
                          Honda of Canada Mfg.
                        </p>
                        <p >
                          - Design, develop and test the PLC and HMI programs on production machines.
                        </p>
                        <p >
                          - As a project leader, manage various investment projects and business plans on installing new equipment such as robots and improvements on existing machines.
                        </p>
                      </p>
                      <p className='font-semidbold text-2xl font-medium mt-4'>Languages & Skills:</p>
                      <p className="my-4  leading-relaxed">
                        Full Stack Web Development
                        <p >
                          - Design web app with Javascript, HTML, CSS and React.
                        </p>
                        <p >
                          - Experience in designing backend programs using Node.js and Express.js with PostgreSQL.
                        </p>
                        <p >
                          - Experience in responsive web design using SASS, Flexbox, Tailwind CSS and Bootstrap.
                        </p>
                        <p >
                          - Experience in building apps with Jest, Cypress, and storybooks.
                        </p>
                      </p>
                      <div className='grid justify-items-center mt-4 pt-6 text-center'>
                        <a href="http://www.linkedin.com/in/benyuancao" className='w-30 h6 py-2 px-2 bg-blue-600 rounded font-medium text-2xl text-white shadow-md hover:bg-blue-800 hover:shadow-lg'>
                          LinkedIn Page
                        </a>
                      </div>
                      
                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
  )
}
