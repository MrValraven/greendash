import React from 'react';

import './EsgChatboxDisplay.css';

export const EsgChatbotDisplayTailwind = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[1200px] bg-gradient-to-b from-primary-50 to-white'>
        <header className='py-6 px-8 flex justify-between items-center bg-white shadow-sm rounded-b-lg'>
          <div className='flex items-center gap-4'>
            <svg
              className='w-10 h-10 text-primary-600'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 21V12'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 12L20 7.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 12L4 7.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 5.25L16 9.75'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <h1 className='text-2xl font-bold text-primary-700'>Greendash</h1>
            {/* Next: "Add a complete navigation menu with dropdown for services and resources" */}
          </div>
          <nav className='hidden md:flex items-center gap-8'>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='font-medium hover:text-primary-600 transition-colors'
            >
              Dashboard
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='font-medium hover:text-primary-600 transition-colors'
            >
              Reports
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='font-medium hover:text-primary-600 transition-colors'
            >
              About ESG
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='font-medium hover:text-primary-600 transition-colors'
            >
              Contact
            </a>
          </nav>
          <button className='bg-primary-600 text-white px-5 py-2 rounded-md hover:bg-primary-700 transition-all transform hover:scale-105 shadow-md'>
            Log In
          </button>
        </header>

        <main className='py-12 px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
              <h1 className='text-4xl md:text-5xl font-bold text-primary-800 mb-4'>
                Your ESG Assistant
              </h1>
              <h2 className='text-xl md:text-2xl text-gray-600 mb-6'>
                Get expert guidance on sustainability reporting and EU compliance
              </h2>
              <p className='text-gray-700 mb-8'>
                Our AI-powered chatbot helps you navigate complex ESG regulations, generate
                compliant reports, and improve your sustainability performance with personalized
                recommendations.
              </p>
              <div className='flex gap-4'>
                <button className='bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-all transform hover:scale-105 shadow-md flex items-center gap-2'>
                  <span className='material-symbols-outlined'>chat</span>
                  Start Chat
                </button>
                <button className='border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-md hover:bg-primary-50 transition-all transform hover:scale-105 shadow-sm flex items-center gap-2'>
                  <span className='material-symbols-outlined'>description</span>
                  View Demo
                </button>
              </div>
            </div>
            <div className='md:w-1/2 relative'>
              <div className='bg-white rounded-xl shadow-xl p-6 border border-gray-100 transform hover:scale-[1.02] transition-transform'>
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                  </div>
                  <div className='text-sm text-gray-500'>ESG Assistant</div>
                </div>
                <div className='space-y-4 h-[400px] overflow-y-auto pr-2'>
                  <div className='flex gap-3'>
                    <div className='w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0'>
                      <span className='material-symbols-outlined text-primary-600'>smart_toy</span>
                    </div>
                    <div className='bg-gray-100 rounded-lg p-3 rounded-tl-none max-w-[80%]'>
                      <p>
                        Hello! I'm your ESG Assistant. How can I help you with your sustainability
                        reporting today?
                      </p>
                    </div>
                  </div>
                  <div className='flex justify-end gap-3'>
                    <div className='bg-primary-100 rounded-lg p-3 rounded-tr-none max-w-[80%]'>
                      <p>I need help understanding the CSRD requirements for my company.</p>
                    </div>
                    <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0'>
                      <span className='material-symbols-outlined'>person</span>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <div className='w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0'>
                      <span className='material-symbols-outlined text-primary-600'>smart_toy</span>
                    </div>
                    <div className='bg-gray-100 rounded-lg p-3 rounded-tl-none max-w-[80%]'>
                      <p>
                        The Corporate Sustainability Reporting Directive (CSRD) expands
                        sustainability reporting requirements for companies in the EU. It applies
                        to:
                      </p>
                      <ul className='list-disc ml-5 mt-2'>
                        <li>
                          All large companies (meeting 2 of 3 criteria: 250+ employees, €40M+
                          turnover, €20M+ assets)
                        </li>
                        <li>All listed companies (except micro-enterprises)</li>
                        <li>Non-EU companies with significant EU operations</li>
                      </ul>
                      <p className='mt-2'>
                        Would you like me to help determine if your company is subject to CSRD
                        requirements?
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 flex items-center gap-2'>
                  <input
                    type='text'
                    placeholder='Type your question about ESG reporting...'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all'
                  />
                  <button className='p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors'>
                    <span className='material-symbols-outlined'>send</span>
                  </button>
                </div>
              </div>
              <div className='absolute -z-10 -right-4 -bottom-4 w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 rounded-xl'></div>
            </div>
          </div>

          <div className='mt-16'>
            <h2 className='text-2xl font-bold text-center mb-8 text-primary-800'>
              How Our ESG Assistant Helps You
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group'>
                <div className='w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors'>
                  <span className='material-symbols-outlined text-2xl text-primary-600'>
                    description
                  </span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>Simplified Reporting</h3>
                <p className='text-gray-600'>
                  Generate compliant ESG reports quickly with guided templates that meet EU
                  standards.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group'>
                <div className='w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors'>
                  <span className='material-symbols-outlined text-2xl text-primary-600'>gavel</span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>Regulatory Guidance</h3>
                <p className='text-gray-600'>
                  Stay updated with the latest ESG regulations and receive personalized compliance
                  advice.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow group'>
                <div className='w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors'>
                  <span className='material-symbols-outlined text-2xl text-primary-600'>
                    insights
                  </span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>Data Analysis</h3>
                <p className='text-gray-600'>
                  Transform your ESG data into actionable insights with advanced analytics and
                  visualization.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-20'>
              <h2 className='text-2xl font-bold text-center mb-8 text-primary-800'>
                Client Success Stories
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300'>
                  <div className='flex flex-col space-y-4'>
                    <div className='flex space-x-2'>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className='material-symbols-outlined text-yellow-400'>
                          star
                        </span>
                      ))}
                    </div>
                    <p className='text-gray-600 italic'>
                      "The ESG Assistant has transformed how we approach sustainability reporting.
                      What used to take weeks now only takes days, with better compliance too!"
                    </p>
                    <div className='pt-4 mt-auto border-t'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0'>
                          <span className='material-symbols-outlined text-primary-600'>person</span>
                        </div>
                        <div>
                          <h4 className='font-medium'>Sarah Johnson</h4>
                          <p className='text-sm text-gray-500'>
                            Sustainability Director, GreenTech Inc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300'>
                  <div className='flex flex-col space-y-4'>
                    <div className='flex space-x-2'>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className='material-symbols-outlined text-yellow-400'>
                          star
                        </span>
                      ))}
                    </div>
                    <p className='text-gray-600 italic'>
                      "As a medium-sized enterprise, navigating EU ESG regulations seemed impossible
                      until we found Greendash. The AI assistant guided us through every step."
                    </p>
                    <div className='pt-4 mt-auto border-t'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0'>
                          <span className='material-symbols-outlined text-primary-600'>person</span>
                        </div>
                        <div>
                          <h4 className='font-medium'>Michael Rodriguez</h4>
                          <p className='text-sm text-gray-500'>CEO, Apex Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300'>
                  <div className='flex flex-col space-y-4'>
                    <div className='flex space-x-2'>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className='material-symbols-outlined text-yellow-400'>
                          star
                        </span>
                      ))}
                    </div>
                    <p className='text-gray-600 italic'>
                      "The data insights provided by Greendash helped us identify efficiency
                      opportunities we never would have found. We've reduced emissions by 23% in
                      just one year!"
                    </p>
                    <div className='pt-4 mt-auto border-t'>
                      <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0'>
                          <span className='material-symbols-outlined text-primary-600'>person</span>
                        </div>
                        <div>
                          <h4 className='font-medium'>Emma Chen</h4>
                          <p className='text-sm text-gray-500'>CSO, EcoFuture Group</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10 text-center'>
                <button className='border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-md hover:bg-primary-50 transition-all transform hover:scale-105 shadow-sm flex items-center gap-2 mx-auto'>
                  <span className='material-symbols-outlined'>groups</span>
                  View All Success Stories
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
