import React from 'react';

import './EsgKnowledgeHub.css';

export const EsgKnowledgeHubTailwind = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[1200px] bg-white font-sans'>
        <header className='bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-6 px-8 rounded-b-lg shadow-lg'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <svg
                className='w-10 h-10 text-emerald-300'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
                  fill='currentColor'
                />
                <path
                  d='M12 17L12 11'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <circle cx='12' cy='8' r='1' fill='currentColor' />
                <path
                  d='M7 13C7 9.5 9.5 7 12 7C14.5 7 17 9.5 17 13'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              <h1 className='text-2xl font-bold'>Greendash</h1>
            </div>
            <nav>
              <ul className='flex space-x-8'>
                <li className='hover:text-emerald-300 transition-colors duration-300 font-medium relative group'>
                  <a href='https://webcrumbs.cloud/placeholder' className='py-2 block'>
                    Solutions
                  </a>
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full'></span>
                </li>
                <li className='hover:text-emerald-300 transition-colors duration-300 font-medium relative group'>
                  <a href='https://webcrumbs.cloud/placeholder' className='py-2 block'>
                    Knowledge Hub
                  </a>
                  <span className='absolute bottom-0 left-0 w-full h-0.5 bg-emerald-300'></span>
                </li>
                <li className='hover:text-emerald-300 transition-colors duration-300 font-medium relative group'>
                  <a href='https://webcrumbs.cloud/placeholder' className='py-2 block'>
                    About Us
                  </a>
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full'></span>
                </li>
                <li className='hover:text-emerald-300 transition-colors duration-300 font-medium relative group'>
                  <a href='https://webcrumbs.cloud/placeholder' className='py-2 block'>
                    Contact
                  </a>
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full'></span>
                </li>
              </ul>
            </nav>
            <button className='bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md'>
              Get Started
            </button>
          </div>
        </header>

        <section className='pt-12 pb-16 px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>ESG Knowledge Hub</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Your comprehensive resource for Environmental, Social, and Governance insights,
              trends, and best practices.
            </p>
          </div>

          <div className='flex justify-between items-center mb-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search resources...'
                className='pl-10 pr-4 py-3 w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
              />
              <span className='material-symbols-outlined absolute left-3 top-3 text-gray-400'>
                search
              </span>
            </div>

            <div className='flex space-x-4'>
              <details className='relative cursor-pointer'>
                <summary className='list-none flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors'>
                  <span>Filter by Topic</span>
                  <span className='material-symbols-outlined text-gray-500'>expand_more</span>
                </summary>
                <div className='absolute bg-white mt-2 p-2 shadow-lg rounded-lg border border-gray-200 w-56 z-10'>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Environmental</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Social</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Governance</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Reporting</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Regulations</span>
                  </label>
                </div>
              </details>

              <details className='relative cursor-pointer'>
                <summary className='list-none flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors'>
                  <span>Resource Type</span>
                  <span className='material-symbols-outlined text-gray-500'>expand_more</span>
                </summary>
                <div className='absolute bg-white mt-2 p-2 shadow-lg rounded-lg border border-gray-200 w-56 z-10'>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Articles</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Whitepapers</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Case Studies</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Webinars</span>
                  </label>
                  <label className='flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer'>
                    <input type='checkbox' className='form-checkbox h-4 w-4 text-emerald-600' />
                    <span>Templates</span>
                  </label>
                </div>
              </details>

              <details className='relative cursor-pointer'>
                <summary className='list-none flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors'>
                  <span>Sort By</span>
                  <span className='material-symbols-outlined text-gray-500'>expand_more</span>
                </summary>
                <div className='absolute right-0 bg-white mt-2 p-2 shadow-lg rounded-lg border border-gray-200 w-56 z-10'>
                  <button className='w-full text-left p-2 hover:bg-gray-100 rounded'>
                    Most Recent
                  </button>
                  <button className='w-full text-left p-2 hover:bg-gray-100 rounded'>
                    Most Popular
                  </button>
                  <button className='w-full text-left p-2 hover:bg-gray-100 rounded'>A-Z</button>
                </div>
              </details>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group'>
              <div className='relative h-48 bg-emerald-100'>
                <img
                  src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                  alt='CSRD Reporting'
                  className='w-full h-full object-cover'
                />
                <div className='absolute top-0 left-0 bg-emerald-700 text-white px-3 py-1 text-sm font-medium'>
                  Trending
                </div>
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                    Reporting
                  </span>
                  <span className='text-gray-500 text-sm'>May 12, 2023</span>
                </div>
                <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors'>
                  CSRD Requirements: What Companies Need to Know
                </h3>
                <p className='text-gray-600 mb-4'>
                  A comprehensive guide to the Corporate Sustainability Reporting Directive and how
                  it affects reporting requirements for EU companies.
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-1 text-gray-500'>
                    <span className='material-symbols-outlined text-sm'>visibility</span>
                    <span className='text-sm'>1.2k</span>
                  </div>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='inline-flex items-center font-medium text-emerald-700 hover:text-emerald-800 transition-colors'
                  >
                    <span>Read More</span>
                    <span className='material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform'>
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group'>
              <div className='relative h-48 bg-blue-100'>
                <img
                  src='https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                  alt='Social Impact'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                    Social
                  </span>
                  <span className='text-gray-500 text-sm'>April 28, 2023</span>
                </div>
                <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors'>
                  Measuring Social Impact: Best Practices for 2023
                </h3>
                <p className='text-gray-600 mb-4'>
                  How companies can effectively measure and report on their social impact
                  initiatives to drive meaningful change.
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-1 text-gray-500'>
                    <span className='material-symbols-outlined text-sm'>visibility</span>
                    <span className='text-sm'>945</span>
                  </div>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='inline-flex items-center font-medium text-emerald-700 hover:text-emerald-800 transition-colors'
                  >
                    <span>Read More</span>
                    <span className='material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform'>
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group'>
              <div className='relative h-48 bg-amber-100'>
                <img
                  src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                  alt='ESG Board Oversight'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                    Governance
                  </span>
                  <span className='text-gray-500 text-sm'>May 3, 2023</span>
                </div>
                <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors'>
                  ESG Board Oversight: Creating Effective Structures
                </h3>
                <p className='text-gray-600 mb-4'>
                  Guidelines for establishing robust governance structures that integrate ESG
                  considerations at the board level.
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-1 text-gray-500'>
                    <span className='material-symbols-outlined text-sm'>visibility</span>
                    <span className='text-sm'>782</span>
                  </div>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='inline-flex items-center font-medium text-emerald-700 hover:text-emerald-800 transition-colors'
                  >
                    <span>Read More</span>
                    <span className='material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform'>
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Next: "Add a Resource Categories section" */}
        </section>

        <section className='bg-gray-50 py-16 px-8'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-gray-800 mb-3'>Featured ESG Resources</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Access our premium content to stay ahead of the curve in sustainability reporting
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-500 hover:shadow-xl transition-shadow'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100 text-emerald-700 mb-4'>
                <span className='material-symbols-outlined'>description</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>ESG Reporting Templates</h3>
              <p className='text-gray-600 mb-4'>
                Ready-to-use templates that align with major ESG frameworks
              </p>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-4 py-2 w-full transition-colors duration-300 flex items-center justify-center'>
                <span>Download Templates</span>
                <span className='material-symbols-outlined ml-2'>download</span>
              </button>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-xl transition-shadow'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-700 mb-4'>
                <span className='material-symbols-outlined'>menu_book</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>ESG Regulation Guide</h3>
              <p className='text-gray-600 mb-4'>
                Comprehensive overview of current and upcoming ESG regulations across different
                regions and sectors.
              </p>
              <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 w-full transition-colors duration-300 flex items-center justify-center'>
                <span>Read the Guide</span>
                <span className='material-symbols-outlined ml-2'>visibility</span>
              </button>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500 hover:shadow-xl transition-shadow'>
              <div className='flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-700 mb-4'>
                <span className='material-symbols-outlined'>play_circle</span>
              </div>
              <h3 className='text-xl font-semibold mb-2'>ESG Strategy Webinar</h3>
              <p className='text-gray-600 mb-4'>
                On-demand webinar featuring ESG experts discussing how to develop an effective
                sustainability strategy.
              </p>
              <button className='bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-4 py-2 w-full transition-colors duration-300 flex items-center justify-center'>
                <span>Watch Webinar</span>
                <span className='material-symbols-outlined ml-2'>smart_display</span>
              </button>
            </div>
          </div>
          {/* Next: "Add a section with ESG Trends and Statistics" */}
        </section>
        <section className='py-16 px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Resource Categories</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Explore our specialized content collections to enhance your ESG knowledge and
              implementation.
            </p>
          </div>

          <div className='mb-16'>
            <div className='flex justify-between items-center mb-8'>
              <h3 className='text-2xl font-bold text-gray-800'>ESG Trends and Statistics</h3>
              <a
                href='https://webcrumbs.cloud/placeholder'
                className='text-emerald-700 hover:text-emerald-800 font-medium flex items-center transition-colors'
              >
                View all trends
                <span className='material-symbols-outlined ml-1'>arrow_forward</span>
              </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                <h4 className='text-lg font-bold mb-3 text-gray-800'>Carbon Emissions by Sector</h4>
                <div className='h-64 bg-gray-50 rounded-lg mb-4 p-4 flex items-center justify-center'>
                  <svg
                    className='w-full h-full'
                    viewBox='0 0 400 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect x='40' y='30' width='60' height='140' fill='#065f46' rx='4'></rect>
                    <rect x='120' y='70' width='60' height='100' fill='#047857' rx='4'></rect>
                    <rect x='200' y='90' width='60' height='80' fill='#059669' rx='4'></rect>
                    <rect x='280' y='110' width='60' height='60' fill='#10b981' rx='4'></rect>
                    <text x='70' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      Energy
                    </text>
                    <text x='150' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      Transport
                    </text>
                    <text x='230' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      Industry
                    </text>
                    <text x='310' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      Buildings
                    </text>
                    <text x='70' y='20' text-anchor='middle' font-size='12' fill='#374151'>
                      35%
                    </text>
                    <text x='150' y='60' text-anchor='middle' font-size='12' fill='#374151'>
                      25%
                    </text>
                    <text x='230' y='80' text-anchor='middle' font-size='12' fill='#374151'>
                      20%
                    </text>
                    <text x='310' y='100' text-anchor='middle' font-size='12' fill='#374151'>
                      15%
                    </text>
                  </svg>
                </div>
                <p className='text-gray-600 text-sm'>
                  Global carbon emissions distribution across major sectors, highlighting areas that
                  require immediate attention.
                </p>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                <h4 className='text-lg font-bold mb-3 text-gray-800'>ESG Investment Growth</h4>
                <div className='h-64 bg-gray-50 rounded-lg mb-4 p-4 flex items-center justify-center'>
                  <svg
                    className='w-full h-full'
                    viewBox='0 0 400 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M40,160 L40,100 L100,120 L160,90 L220,70 L280,50 L340,30'
                      stroke='#059669'
                      stroke-width='3'
                      fill='none'
                    ></path>
                    <path d='M40,160 L340,160' stroke='#d1d5db' stroke-width='1'></path>
                    <path
                      d='M40,120 L340,120'
                      stroke='#d1d5db'
                      stroke-width='1'
                      stroke-dasharray='5,5'
                    ></path>
                    <path
                      d='M40,80 L340,80'
                      stroke='#d1d5db'
                      stroke-width='1'
                      stroke-dasharray='5,5'
                    ></path>
                    <path
                      d='M40,40 L340,40'
                      stroke='#d1d5db'
                      stroke-width='1'
                      stroke-dasharray='5,5'
                    ></path>
                    <text x='40' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      2018
                    </text>
                    <text x='100' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      2019
                    </text>
                    <text x='160' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      2020
                    </text>
                    <text x='220' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      2021
                    </text>
                    <text x='280' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      2022
                    </text>
                    <text x='340' y='180' text-anchor='middle' font-size='12' fill='#374151'>
                      2023
                    </text>
                    <text x='30' y='160' text-anchor='end' font-size='10' fill='#374151'>
                      $1T
                    </text>
                    <text x='30' y='120' text-anchor='end' font-size='10' fill='#374151'>
                      $2T
                    </text>
                    <text x='30' y='80' text-anchor='end' font-size='10' fill='#374151'>
                      $3T
                    </text>
                    <text x='30' y='40' text-anchor='end' font-size='10' fill='#374151'>
                      $4T
                    </text>
                    <circle cx='40' cy='100' r='4' fill='#059669'></circle>
                    <circle cx='100' cy='120' r='4' fill='#059669'></circle>
                    <circle cx='160' cy='90' r='4' fill='#059669'></circle>
                    <circle cx='220' cy='70' r='4' fill='#059669'></circle>
                    <circle cx='280' cy='50' r='4' fill='#059669'></circle>
                    <circle cx='340' cy='30' r='4' fill='#059669'></circle>
                  </svg>
                </div>
                <p className='text-gray-600 text-sm'>
                  The remarkable growth of ESG-focused investments over the past five years, showing
                  increasing market confidence.
                </p>
              </div>

              <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]'>
                <h4 className='text-lg font-bold mb-3 text-gray-800'>
                  Corporate ESG Adoption Rates
                </h4>
                <div className='h-64 bg-gray-50 rounded-lg mb-4 p-4 flex items-center justify-center'>
                  <svg
                    className='w-full h-full'
                    viewBox='0 0 400 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M200,100 L200,10 A90,90 0 0,1 275,36 Z' fill='#10b981'></path>
                    <path d='M200,100 L275,36 A90,90 0 0,1 290,100 Z' fill='#34d399'></path>
                    <path d='M200,100 L290,100 A90,90 0 0,1 200,190 Z' fill='#6ee7b7'></path>
                    <path d='M200,100 L200,190 A90,90 0 0,1 110,100 Z' fill='#d1fae5'></path>
                    <path d='M200,100 L110,100 A90,90 0 0,1 200,10 Z' fill='#059669'></path>
                    <text x='225' y='40' font-size='12' fill='#374151'>
                      Full Integration (28%)
                    </text>
                    <text x='295' y='80' font-size='12' fill='#374151'>
                      Advanced (15%)
                    </text>
                    <text x='270' y='140' font-size='12' fill='#374151'>
                      Developing (32%)
                    </text>
                    <text x='150' y='160' font-size='12' fill='#374151'>
                      Early Stage (18%)
                    </text>
                    <text x='120' y='60' font-size='12' fill='#374151'>
                      Not Started (7%)
                    </text>
                  </svg>
                </div>
                <p className='text-gray-600 text-sm'>
                  Current state of ESG adoption among Fortune 500 companies, categorized by
                  implementation maturity levels.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between items-center mb-8'>
              <h3 className='text-2xl font-bold text-gray-800'>Case Studies</h3>
              <a
                href='https://webcrumbs.cloud/placeholder'
                className='text-emerald-700 hover:text-emerald-800 font-medium flex items-center transition-colors'
              >
                View all case studies
                <span className='material-symbols-outlined ml-1'>arrow_forward</span>
              </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group'>
                <div className='relative h-48 bg-emerald-100'>
                  <img
                    src='https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
                    alt='Renewable Energy Case Study'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-0 right-0 bg-emerald-700 text-white px-3 py-1 text-sm font-medium'>
                    Success Story
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                      Environmental
                    </span>
                    <span className='text-gray-500 text-sm'>June 2, 2023</span>
                  </div>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors'>
                    Tech Giant Achieves 100% Renewable Energy Goal
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    How a leading technology company transitioned its global operations to renewable
                    energy sources ahead of schedule.
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-1 text-gray-500'>
                      <span className='material-symbols-outlined text-sm'>visibility</span>
                      <span className='text-sm'>2.3k</span>
                    </div>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='inline-flex items-center font-medium text-emerald-700 hover:text-emerald-800 transition-colors'
                    >
                      <span>Read Case Study</span>
                      <span className='material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform'>
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group'>
                <div className='relative h-48 bg-blue-100'>
                  <img
                    src='https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
                    alt='Diversity and Inclusion Case Study'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                      Social
                    </span>
                    <span className='text-gray-500 text-sm'>May 17, 2023</span>
                  </div>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors'>
                    Financial Firm Transforms Workplace Diversity
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    A detailed analysis of how a global financial services company implemented
                    successful diversity and inclusion initiatives.
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-1 text-gray-500'>
                      <span className='material-symbols-outlined text-sm'>visibility</span>
                      <span className='text-sm'>1.7k</span>
                    </div>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='inline-flex items-center font-medium text-emerald-700 hover:text-emerald-800 transition-colors'
                    >
                      <span>Read Case Study</span>
                      <span className='material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform'>
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group'>
                <div className='relative h-48 bg-amber-100'>
                  <img
                    src='https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80'
                    alt='Supply Chain Governance Case Study'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                      Governance
                    </span>
                    <span className='text-gray-500 text-sm'>April 30, 2023</span>
                  </div>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-emerald-700 transition-colors'>
                    Manufacturer Revolutionizes Supply Chain Governance
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    How a manufacturing company implemented blockchain technology to ensure
                    transparency and ethical practices across its supply chain.
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-1 text-gray-500'>
                      <span className='material-symbols-outlined text-sm'>visibility</span>
                      <span className='text-sm'>1.5k</span>
                    </div>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='inline-flex items-center font-medium text-emerald-700 hover:text-emerald-800 transition-colors'
                    >
                      <span>Read Case Study</span>
                      <span className='material-symbols-outlined ml-1 text-sm transform group-hover:translate-x-1 transition-transform'>
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 px-8'>
          <div className='bg-gradient-to-r from-emerald-800 to-emerald-950 rounded-2xl p-8 text-white relative overflow-hidden'>
            <div className='absolute right-0 top-0 w-1/3 h-full opacity-10'>
              <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='currentColor'
                  d='M45.2,-76.3C58.9,-69.8,70.7,-58.2,79.3,-44.6C87.9,-31,93.4,-15.5,92.4,-0.6C91.4,14.4,83.9,28.8,74.1,41.1C64.3,53.4,52.2,63.7,38.8,70.3C25.5,76.9,12.7,79.9,-0.6,80.9C-13.9,82,-27.8,81.1,-39.1,74.9C-50.5,68.7,-59.2,57.2,-66.3,44.9C-73.4,32.5,-78.9,19.3,-80.3,5.2C-81.7,-8.9,-78.9,-23.9,-72.2,-37.1C-65.5,-50.3,-54.8,-61.7,-42.1,-68.5C-29.3,-75.4,-14.7,-77.7,0.7,-78.9C16,-80.1,32,-82.7,45.2,-76.3Z'
                  transform='translate(100 100)'
                />
              </svg>
            </div>
            <div className='relative z-10 max-w-4xl'>
              <h2 className='text-3xl font-bold mb-6'>Stay Updated with Our ESG Newsletter</h2>
              <p className='text-lg mb-8 opacity-90'>
                Join thousands of sustainability professionals and receive our monthly newsletter
                with the latest ESG insights, case studies, and regulatory updates.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex-grow py-3 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400'
                />
                <button className='bg-emerald-500 hover:bg-emerald-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105'>
                  Subscribe Now
                </button>
              </div>
              <p className='mt-4 text-sm opacity-75'>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
          {/* Next: "Add a Case Studies Section" */}
        </section>
      </div>
    </div>
  );
};
