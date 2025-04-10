import React from 'react';

import './NotFound.css';

export const Component = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[1200px] bg-gradient-to-b from-primary-50 to-white min-h-screen flex flex-col items-center justify-center py-16'>
        <div className='text-center mb-8'>
          <div className='flex justify-center mb-6'>
            <div className='relative'>
              <svg
                className='w-32 h-32 text-primary-600'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
                  fill='currentColor'
                />
              </svg>
              <svg
                className='absolute top-0 left-0 w-32 h-32 text-primary-300 animate-ping opacity-50'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
                  fill='currentColor'
                />
              </svg>
              <div className='absolute -top-3 -right-3'>
                <svg
                  className='w-10 h-10 text-green-500 transform rotate-12 hover:rotate-0 transition-transform duration-300'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 3L14.94 8.34L21 9.27L16.5 13.33L17.88 19.5L12 16.25L6.12 19.5L7.5 13.33L3 9.27L9.06 8.34L12 3Z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className='text-6xl font-bold mb-4 text-primary-800'>
            <span className='inline-block animate-bounce-slow'>4</span>
            <span className='inline-block animate-pulse'>0</span>
            <span className='inline-block animate-bounce-slow'>4</span>
          </h1>
          <h2 className='text-2xl font-semibold mb-6 text-primary-700'>
            Oops! We Can't Find That Page
          </h2>
          <p className='text-lg max-w-2xl mx-auto mb-8 text-gray-600'>
            Just like sustainable practices, good navigation is essential. The page you're looking
            for might have been moved, deleted, or is temporarily unavailable.
          </p>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <button className='px-6 py-3 bg-primary-600 text-white rounded-lg shadow-lg hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group'>
              <span className='material-symbols-outlined group-hover:animate-spin-slow'>home</span>
              Return Home
            </button>
            <button className='px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg shadow-lg hover:bg-primary-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2'>
              <span className='material-symbols-outlined'>support_agent</span>
              Contact Support
            </button>
          </div>
        </div>

        <div className='max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 border border-primary-100'>
          <h3 className='text-xl font-semibold mb-4 text-primary-700'>
            While you're here, explore our sustainability solutions:
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-primary-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-primary-100 group'>
              <div className='rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300'>
                <span className='material-symbols-outlined text-primary-700'>assignment</span>
              </div>
              <h4 className='font-semibold mb-2'>ESG Reporting</h4>
              <p className='text-sm text-gray-600'>
                Automate your environmental, social, and governance reports with our AI-powered
                tools.
              </p>
            </div>

            <div className='bg-primary-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-primary-100 group'>
              <div className='rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300'>
                <span className='material-symbols-outlined text-primary-700'>analytics</span>
              </div>
              <h4 className='font-semibold mb-2'>Carbon Tracking</h4>
              <p className='text-sm text-gray-600'>
                Monitor and reduce your carbon footprint with real-time analytics and actionable
                insights.
              </p>
            </div>

            <div className='bg-primary-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-primary-100 group'>
              <div className='rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300'>
                <span className='material-symbols-outlined text-primary-700'>trending_up</span>
              </div>
              <h4 className='font-semibold mb-2'>Impact Metrics</h4>
              <p className='text-sm text-gray-600'>
                Showcase your sustainability achievements with beautiful visualizations and reports.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 border border-primary-100 mt-8'>
            <h3 className='text-xl font-semibold mb-4 text-primary-700 flex items-center'>
              <span className='material-symbols-outlined mr-2 text-primary-600'>eco</span>
              Sustainability Tips Carousel
              {/* Next: "Add filter options for tips by category" */}
            </h3>
            <div className='relative overflow-hidden'>
              <div className='flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide'>
                <div className='min-w-[280px] snap-start bg-gradient-to-br from-green-50 to-primary-50 p-6 rounded-lg border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300'>
                  <div className='flex justify-between items-start mb-3'>
                    <span className='material-symbols-outlined text-green-600 text-2xl'>
                      water_drop
                    </span>
                    <span className='bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full'>
                      Water
                    </span>
                  </div>
                  <h4 className='font-bold text-primary-800 mb-2'>Water Conservation</h4>
                  <p className='text-sm text-gray-700 mb-4'>
                    Install low-flow fixtures in your workplace to reduce water consumption by up to
                    30%.
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-xs text-gray-500'>Tip #1 of 12</span>
                    <button className='text-primary-600 hover:text-primary-800 transition-colors'>
                      <span className='material-symbols-outlined'>bookmark_add</span>
                    </button>
                  </div>
                </div>

                <div className='min-w-[280px] snap-start bg-gradient-to-br from-yellow-50 to-primary-50 p-6 rounded-lg border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300'>
                  <div className='flex justify-between items-start mb-3'>
                    <span className='material-symbols-outlined text-yellow-600 text-2xl'>bolt</span>
                    <span className='bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full'>
                      Energy
                    </span>
                  </div>
                  <h4 className='font-bold text-primary-800 mb-2'>Energy Efficiency</h4>
                  <p className='text-sm text-gray-700 mb-4'>
                    Switch to LED lighting to reduce energy consumption by up to 75% compared to
                    incandescent bulbs.
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-xs text-gray-500'>Tip #2 of 12</span>
                    <button className='text-primary-600 hover:text-primary-800 transition-colors'>
                      <span className='material-symbols-outlined'>bookmark_add</span>
                    </button>
                  </div>
                </div>

                <div className='min-w-[280px] snap-start bg-gradient-to-br from-blue-50 to-primary-50 p-6 rounded-lg border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300'>
                  <div className='flex justify-between items-start mb-3'>
                    <span className='material-symbols-outlined text-blue-600 text-2xl'>
                      recycling
                    </span>
                    <span className='bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full'>
                      Waste
                    </span>
                  </div>
                  <h4 className='font-bold text-primary-800 mb-2'>Zero Waste</h4>
                  <p className='text-sm text-gray-700 mb-4'>
                    Implement a composting program to divert up to 40% of your waste stream from
                    landfills.
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-xs text-gray-500'>Tip #3 of 12</span>
                    <button className='text-primary-600 hover:text-primary-800 transition-colors'>
                      <span className='material-symbols-outlined'>bookmark_add</span>
                    </button>
                  </div>
                </div>

                <div className='min-w-[280px] snap-start bg-gradient-to-br from-purple-50 to-primary-50 p-6 rounded-lg border border-primary-100 shadow-sm hover:shadow-md transition-all duration-300'>
                  <div className='flex justify-between items-start mb-3'>
                    <span className='material-symbols-outlined text-purple-600 text-2xl'>
                      diversity_3
                    </span>
                    <span className='bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full'>
                      Social
                    </span>
                  </div>
                  <h4 className='font-bold text-primary-800 mb-2'>Inclusive Practices</h4>
                  <p className='text-sm text-gray-700 mb-4'>
                    Create a supplier diversity program to support local and minority-owned
                    businesses in your supply chain.
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-xs text-gray-500'>Tip #4 of 12</span>
                    <button className='text-primary-600 hover:text-primary-800 transition-colors'>
                      <span className='material-symbols-outlined'>bookmark_add</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex justify-center mt-4 gap-2'>
                <button className='w-2 h-2 rounded-full bg-primary-600'></button>
                <button className='w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-colors'></button>
                <button className='w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-colors'></button>
                <button className='w-2 h-2 rounded-full bg-gray-300 hover:bg-primary-400 transition-colors'></button>
              </div>

              <button className='absolute top-1/2 -left-1 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md text-primary-700 hover:text-primary-900 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed'>
                <span className='material-symbols-outlined'>arrow_back_ios</span>
              </button>

              <button className='absolute top-1/2 -right-1 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md text-primary-700 hover:text-primary-900 hover:shadow-lg transition-all'>
                <span className='material-symbols-outlined'>arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <p className='text-sm text-gray-500 max-w-lg mx-auto'>
            Our sustainability platform helps companies meet global ESG standards including GRI,
            SASB, TCFD, and CDP. Let's make sustainability reporting simple together.
          </p>
          <div className='flex justify-center gap-4 mt-4'>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-primary-600 hover:text-primary-800 transition-colors duration-300'
            >
              <i className='fa-brands fa-twitter text-xl'></i>
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-primary-600 hover:text-primary-800 transition-colors duration-300'
            >
              <i className='fa-brands fa-linkedin text-xl'></i>
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-primary-600 hover:text-primary-800 transition-colors duration-300'
            >
              <i className='fa-brands fa-instagram text-xl'></i>
            </a>
            {/* Next: "Add newsletter subscription form" */}
          </div>
        </div>
      </div>
    </div>
  );
};
