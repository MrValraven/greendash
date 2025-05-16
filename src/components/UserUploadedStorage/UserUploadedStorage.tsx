import React from 'react';

import './UserUploadedStorage.css';

export const UserUploadedStorageTailwind = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[1200px] bg-gradient-to-b from-primary-50 to-white p-8 rounded-lg shadow-sm'>
        <header className='mb-8'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='w-10 h-10 text-primary-600'
              >
                <path
                  fill='currentColor'
                  d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.5v-9l7 4.5-7 4.5z'
                />
              </svg>
              <h1 className='text-3xl font-bold text-primary-800'>greendash</h1>
            </div>

            <div className='flex items-center gap-6'>
              <button className='flex items-center gap-2 hover:text-primary-700 transition duration-300'>
                <span className='material-symbols-outlined'>notifications</span>
                <span className='absolute -mt-5 -mr-5 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  3
                </span>
              </button>
              <button className='flex items-center gap-2 hover:text-primary-700 transition duration-300'>
                <span className='material-symbols-outlined'>settings</span>
              </button>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-primary-200 overflow-hidden transform hover:scale-105 transition duration-300'>
                  <img
                    src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
                    alt='Profile'
                    className='w-full h-full object-cover'
                  />
                </div>
                <details className='relative'>
                  <summary className='list-none flex items-center gap-1 cursor-pointer hover:text-primary-700'>
                    <span className='font-medium'>Emma Johnson</span>
                    <span className='material-symbols-outlined text-sm'>expand_more</span>
                  </summary>
                  <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-100'>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='block px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-700'
                    >
                      Profile
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='block px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-700'
                    >
                      Account Settings
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='block px-4 py-2 text-sm hover:bg-primary-50 hover:text-primary-700'
                    >
                      Logout
                    </a>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className='flex justify-between items-center mb-6'>
            <div>
              <h2 className='text-2xl font-semibold mb-1'>Your Uploaded Files</h2>
              <p className='text-gray-600'>
                Manage all your sustainability report documents in one place
              </p>
              {/* Next: "Add breadcrumb navigation" */}
            </div>
            <div className='flex items-center gap-2 mt-2 text-sm text-gray-500'>
              <a
                href='https://webcrumbs.cloud/dashboard'
                className='hover:text-primary-600 transition duration-300'
              >
                Dashboard
              </a>
              <span className='material-symbols-outlined text-xs'>chevron_right</span>
              <a
                href='https://webcrumbs.cloud/files'
                className='hover:text-primary-600 transition duration-300'
              >
                Files
              </a>
              <span className='material-symbols-outlined text-xs'>chevron_right</span>
              <span className='text-primary-600'>Uploaded Files</span>
            </div>

            <div className='flex gap-3'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search files...'
                  className='pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64 transition-all duration-300 hover:border-primary-300'
                />
                <span className='material-symbols-outlined absolute left-3 top-2.5 text-gray-400'>
                  search
                </span>
              </div>
              <button className='bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2 shadow-sm hover:shadow-md'>
                <span className='material-symbols-outlined'>upload_file</span>
                Upload New File
              </button>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
            <div className='flex justify-between mb-6'>
              <div className='flex gap-4'>
                <button className='px-4 py-2 bg-primary-100 text-primary-800 rounded-lg hover:bg-primary-200 transition duration-300'>
                  All Files
                </button>
                <button className='px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300'>
                  Recent
                </button>
                <button className='px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300'>
                  Shared
                </button>
                <button className='px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300'>
                  Reports
                </button>
                {/* Next: "Add dropdown filter for file types" */}
              </div>
              <div className='relative'>
                <details className='relative'>
                  <summary className='flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer'>
                    <span className='material-symbols-outlined'>filter_list</span>
                    <span>File Type</span>
                    <span className='material-symbols-outlined text-sm'>expand_more</span>
                  </summary>
                  <div className='absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-100'>
                    <label className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer'>
                      <input type='checkbox' className='form-checkbox h-4 w-4 text-primary-600' />
                      PDF Documents
                    </label>
                    <label className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer'>
                      <input type='checkbox' className='form-checkbox h-4 w-4 text-primary-600' />
                      Excel Spreadsheets
                    </label>
                    <label className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer'>
                      <input type='checkbox' className='form-checkbox h-4 w-4 text-primary-600' />
                      Images
                    </label>
                    <label className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer'>
                      <input type='checkbox' className='form-checkbox h-4 w-4 text-primary-600' />
                      Archives
                    </label>
                    <label className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer'>
                      <input type='checkbox' className='form-checkbox h-4 w-4 text-primary-600' />
                      Other
                    </label>
                  </div>
                </details>
              </div>

              <div className='flex gap-3'>
                <button
                  className='p-2 rounded-lg hover:bg-gray-100 transition duration-300'
                  title='List view'
                >
                  <span className='material-symbols-outlined'>view_list</span>
                </button>
                <button
                  className='p-2 rounded-lg bg-gray-100 transition duration-300'
                  title='Grid view'
                >
                  <span className='material-symbols-outlined'>grid_view</span>
                </button>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-6'>
              {/* File Card 1 */}
              <div className='border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300 hover:border-primary-300'>
                <div className='h-40 bg-primary-50 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-7xl text-primary-400'>
                    description
                  </span>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-medium group-hover:text-primary-700 transition duration-300'>
                      Annual Sustainability Report 2023.pdf
                    </h3>
                    <details className='relative'>
                      <summary className='list-none cursor-pointer'>
                        <span className='material-symbols-outlined p-1 hover:bg-gray-100 rounded'>
                          more_vert
                        </span>
                      </summary>
                      <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100'>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Download
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Rename
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Share
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                        >
                          Delete
                        </a>
                      </div>
                    </details>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span className='material-symbols-outlined text-lg mr-1'>calendar_today</span>
                    <span>Uploaded on May 15, 2023</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>
                      Verified
                    </span>
                    <span className='text-sm text-gray-500'>4.2 MB</span>
                  </div>
                </div>
              </div>

              {/* File Card 2 */}
              <div className='border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300 hover:border-primary-300'>
                <div className='h-40 bg-blue-50 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-7xl text-blue-400'>
                    table_chart
                  </span>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-medium group-hover:text-primary-700 transition duration-300'>
                      Carbon Emissions Data Q2.xlsx
                    </h3>
                    <details className='relative'>
                      <summary className='list-none cursor-pointer'>
                        <span className='material-symbols-outlined p-1 hover:bg-gray-100 rounded'>
                          more_vert
                        </span>
                      </summary>
                      <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100'>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Download
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Rename
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Share
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                        >
                          Delete
                        </a>
                      </div>
                    </details>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span className='material-symbols-outlined text-lg mr-1'>calendar_today</span>
                    <span>Uploaded on Jun 22, 2023</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full'>
                      In Review
                    </span>
                    <span className='text-sm text-gray-500'>2.7 MB</span>
                  </div>
                </div>
              </div>

              {/* File Card 3 */}
              <div className='border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300 hover:border-primary-300'>
                <div className='h-40 bg-purple-50 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-7xl text-purple-400'>image</span>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-medium group-hover:text-primary-700 transition duration-300'>
                      ESG Presentation Graphics.zip
                    </h3>
                    <details className='relative'>
                      <summary className='list-none cursor-pointer'>
                        <span className='material-symbols-outlined p-1 hover:bg-gray-100 rounded'>
                          more_vert
                        </span>
                      </summary>
                      <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100'>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Download
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Rename
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Share
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                        >
                          Delete
                        </a>
                      </div>
                    </details>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span className='material-symbols-outlined text-lg mr-1'>calendar_today</span>
                    <span>Uploaded on Jul 03, 2023</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>
                      Verified
                    </span>
                    <span className='text-sm text-gray-500'>18.5 MB</span>
                  </div>
                </div>
              </div>

              {/* File Card 4 */}
              <div className='border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300 hover:border-primary-300'>
                <div className='h-40 bg-orange-50 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-7xl text-orange-400'>
                    description
                  </span>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-medium group-hover:text-primary-700 transition duration-300'>
                      Supply Chain Impact Report.pdf
                    </h3>
                    <details className='relative'>
                      <summary className='list-none cursor-pointer'>
                        <span className='material-symbols-outlined p-1 hover:bg-gray-100 rounded'>
                          more_vert
                        </span>
                      </summary>
                      <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100'>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Download
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Rename
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Share
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                        >
                          Delete
                        </a>
                      </div>
                    </details>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span className='material-symbols-outlined text-lg mr-1'>calendar_today</span>
                    <span>Uploaded on Apr 10, 2023</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
                      Shared
                    </span>
                    <span className='text-sm text-gray-500'>5.8 MB</span>
                  </div>
                </div>
              </div>

              {/* File Card 5 */}
              <div className='border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300 hover:border-primary-300'>
                <div className='h-40 bg-green-50 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-7xl text-green-400'>
                    table_chart
                  </span>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-medium group-hover:text-primary-700 transition duration-300'>
                      Waste Management Metrics.xlsx
                    </h3>
                    <details className='relative'>
                      <summary className='list-none cursor-pointer'>
                        <span className='material-symbols-outlined p-1 hover:bg-gray-100 rounded'>
                          more_vert
                        </span>
                      </summary>
                      <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100'>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Download
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Rename
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Share
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                        >
                          Delete
                        </a>
                      </div>
                    </details>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span className='material-symbols-outlined text-lg mr-1'>calendar_today</span>
                    <span>Uploaded on Aug 05, 2023</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full'>
                      Draft
                    </span>
                    <span className='text-sm text-gray-500'>3.1 MB</span>
                  </div>
                </div>
              </div>

              {/* File Card 6 */}
              <div className='border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition duration-300 hover:border-primary-300'>
                <div className='h-40 bg-red-50 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-7xl text-red-400'>
                    description
                  </span>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <h3 className='font-medium group-hover:text-primary-700 transition duration-300'>
                      Social Impact Statement 2023.pdf
                    </h3>
                    <details className='relative'>
                      <summary className='list-none cursor-pointer'>
                        <span className='material-symbols-outlined p-1 hover:bg-gray-100 rounded'>
                          more_vert
                        </span>
                      </summary>
                      <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100'>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Download
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Rename
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm hover:bg-primary-50'
                        >
                          Share
                        </a>
                        <a
                          href='https://webcrumbs.cloud/placeholder'
                          className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                        >
                          Delete
                        </a>
                      </div>
                    </details>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mb-3'>
                    <span className='material-symbols-outlined text-lg mr-1'>calendar_today</span>
                    <span>Uploaded on Jul 28, 2023</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full'>
                      Confidential
                    </span>
                    <span className='text-sm text-gray-500'>2.3 MB</span>
                  </div>
                </div>
              </div>
              {/* Next: "Add pagination and load more button" */}

              <div className='mt-6 flex justify-center'>
                <button className='bg-primary-50 text-primary-700 hover:bg-primary-100 px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2'>
                  <span className='material-symbols-outlined'>add</span>
                  Load More Files
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className='mt-8 flex justify-between items-center'>
          <div className='flex gap-3'>
            <button className='py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 flex items-center gap-1'>
              <span className='material-symbols-outlined text-sm'>help</span>
              Help
            </button>
            <button className='py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 flex items-center gap-1'>
              <span className='material-symbols-outlined text-sm'>download</span>
              Bulk Download
            </button>
            {/* Next: "Add file storage usage widget" */}
          </div>

          <div className='p-4 bg-white rounded-lg shadow-sm border border-gray-100'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-medium'>Storage Usage</h3>
              <span className='text-xs text-gray-500 hover:text-primary-600 cursor-pointer transition duration-300'>
                Upgrade Plan
              </span>
            </div>
            <div className='mb-3'>
              <div className='flex justify-between text-sm mb-1'>
                <span>36.6 MB used</span>
                <span>500 MB total</span>
              </div>
              <div className='w-full bg-gray-100 rounded-full h-2.5'>
                <div className='bg-primary-600 h-2.5 rounded-full' style={{ width: '7.32%' }}></div>
              </div>
            </div>
            <div className='grid grid-cols-4 gap-2 text-xs text-gray-500'>
              <div className='flex flex-col items-center'>
                <div className='w-3 h-3 rounded-full bg-primary-500 mb-1'></div>
                <span>PDFs</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-3 h-3 rounded-full bg-blue-500 mb-1'></div>
                <span>Excel</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-3 h-3 rounded-full bg-purple-500 mb-1'></div>
                <span>Images</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-3 h-3 rounded-full bg-gray-500 mb-1'></div>
                <span>Other</span>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300'>
              <span className='material-symbols-outlined'>chevron_left</span>
            </button>
            <span className='px-4 py-2'>Page 1 of 3</span>
            <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300'>
              <span className='material-symbols-outlined'>chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
