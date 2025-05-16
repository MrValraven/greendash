import React from 'react';

import './Dashboard.css';
import DashboardSidebar from '@components/DashboardSidebar/DashboardSidebar';
import DashboardMetrics from '@components/DashboardMetrics/DashboardMetrics';

export const DashboardTailwind = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[1200px] bg-white rounded-xl shadow-lg'>
        <header className='flex justify-between items-center p-6 border-b border-gray-200'>
          <div className='flex items-center space-x-3'>
            <div className='bg-primary-600 text-white p-2 rounded-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                />
              </svg>
            </div>
            <h1 className='text-2xl font-bold text-gray-800'>Greendash</h1>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search...'
                className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
              />
              <span className='material-symbols-outlined absolute left-3 top-2.5 text-gray-400'>
                search
              </span>
            </div>
            <details className='relative'>
              <summary className='flex items-center space-x-2 cursor-pointer list-none'>
                <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-all duration-200'>
                  <span className='material-symbols-outlined'>notifications</span>
                </div>
                <div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  3
                </div>
              </summary>
              <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10'>
                <h3 className='font-semibold text-gray-700 mb-2'>Notifications</h3>
                <div className='space-y-2'>
                  <div className='p-2 hover:bg-gray-50 rounded-lg transition-all duration-200'>
                    <p className='text-sm'>New sustainability report available</p>
                    <p className='text-xs text-gray-500'>5 minutes ago</p>
                  </div>
                  <div className='p-2 hover:bg-gray-50 rounded-lg transition-all duration-200'>
                    <p className='text-sm'>Carbon offset goal reached!</p>
                    <p className='text-xs text-gray-500'>2 hours ago</p>
                  </div>
                  <div className='p-2 hover:bg-gray-50 rounded-lg transition-all duration-200'>
                    <p className='text-sm'>New sustainability partner joined</p>
                    <p className='text-xs text-gray-500'>Yesterday</p>
                  </div>
                </div>
              </div>
            </details>
            <details className='relative'>
              <summary className='flex items-center space-x-2 cursor-pointer list-none'>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='Profile'
                    className='w-full h-full object-cover'
                  />
                </div>
                <span className='material-symbols-outlined text-gray-600'>expand_more</span>
              </summary>
              <div className='absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-10'>
                <div className='flex items-center space-x-3 mb-3 pb-3 border-b border-gray-200'>
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <img
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt='Profile'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <p className='font-medium'>Alex Johnson</p>
                    <p className='text-xs text-gray-500'>alex@ecotrack.com</p>
                  </div>
                </div>
                <div className='space-y-2'>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-all duration-200'
                  >
                    <span className='material-symbols-outlined'>account_circle</span>
                    <span>Profile</span>
                  </a>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-all duration-200'
                  >
                    <span className='material-symbols-outlined'>settings</span>
                    <span>Settings</span>
                  </a>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-all duration-200'
                  >
                    <span className='material-symbols-outlined'>logout</span>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </details>
          </div>
        </header>
        <div className='grid grid-cols-4 gap-6 p-6'>
          {/* sidebar esquerda */}
          <DashboardSidebar />

          {/* dashboard content */}
          <div className='col-span-3 space-y-6'>
            {/* dashboard content header */}
            <div className='flex justify-between items-center'>
              <h2 className='text-xl font-bold text-gray-800'>Sustainability Dashboard</h2>
              {/* dashboard content header select days and new project button */}
              <div className='flex space-x-3'>
                <select className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last quarter</option>
                  <option>This year</option>
                </select>
                <button className='bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all duration-200 flex items-center space-x-2'>
                  <span className='material-symbols-outlined text-sm'>add</span>
                  <span>New Project</span>
                </button>
              </div>
            </div>

            {/* dashboard top cards */}
            <DashboardMetrics />

            <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
              <h3 className='text-lg font-semibold mb-4'>New Sustainability Project</h3>
              <form className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Project Name
                    </label>
                    <input
                      type='text'
                      className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
                      placeholder='Enter project name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>Category</label>
                    <select className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'>
                      <option>Carbon Offset</option>
                      <option>Energy Efficiency</option>
                      <option>Waste Reduction</option>
                      <option>Water Conservation</option>
                      <option>Renewable Energy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Description
                  </label>
                  <textarea
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
                    rows={3}
                    placeholder='Describe your sustainability project...'
                  ></textarea>
                </div>

                <div className='grid grid-cols-3 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Start Date
                    </label>
                    <input
                      type='date'
                      className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>End Date</label>
                    <input
                      type='date'
                      className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Budget (USD)
                    </label>
                    <input
                      type='number'
                      className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
                      placeholder='0.00'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Team Members
                  </label>
                  <select
                    multiple
                    className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'
                    size={3}
                  >
                    <option>Sarah Johnson (Environmental Lead)</option>
                    <option>Michael Chen (Project Manager)</option>
                    <option>Jessica Wong (Sustainability Analyst)</option>
                    <option>David Miller (Energy Specialist)</option>
                    <option>Emma Garcia (Waste Management)</option>
                  </select>
                </div>

                <div className='border-dashed border-2 border-gray-300 rounded-lg p-4'>
                  <div className='text-center'>
                    <span className='material-symbols-outlined text-gray-400 text-3xl'>
                      upload_file
                    </span>
                    <p className='text-sm text-gray-500 mt-2'>
                      Drag and drop files here, or click to browse
                    </p>
                    <p className='text-xs text-gray-400 mt-1'>
                      Supports PDF, DOCX, XLS, JPG (Max 10MB)
                    </p>
                    <input type='file' className='hidden' multiple />
                    <button className='mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm'>
                      Browse Files
                    </button>
                  </div>
                </div>

                <div className='flex justify-end space-x-3'>
                  <button className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200'>
                    Save as Draft
                  </button>
                  <button className='px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200'>
                    Submit Project
                  </button>
                </div>
              </form>
              {/* Next: "Add file upload progress indicator" */}
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-lg font-semibold'>Recent Uploads</h3>
                  <button className='text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors'>
                    View All
                  </button>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-200'>
                    <div className='bg-blue-100 p-2 rounded text-blue-700 mr-3'>
                      <span className='material-symbols-outlined'>description</span>
                    </div>
                    <div className='flex-1'>
                      <p className='font-medium'>Q2-Sustainability-Report.pdf</p>
                      <p className='text-xs text-gray-500'>Uploaded 2 hours ago</p>
                    </div>
                    <button className='text-gray-400 hover:text-gray-600 transition-colors'>
                      <span className='material-symbols-outlined'>more_vert</span>
                    </button>
                  </div>
                  <div className='flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-200'>
                    <div className='bg-green-100 p-2 rounded text-green-700 mr-3'>
                      <span className='material-symbols-outlined'>table_chart</span>
                    </div>
                    <div className='flex-1'>
                      <p className='font-medium'>Carbon-Metrics-2023.xlsx</p>
                      <p className='text-xs text-gray-500'>Uploaded yesterday</p>
                    </div>
                    <button className='text-gray-400 hover:text-gray-600 transition-colors'>
                      <span className='material-symbols-outlined'>more_vert</span>
                    </button>
                  </div>
                  <div className='flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-200'>
                    <div className='bg-amber-100 p-2 rounded text-amber-700 mr-3'>
                      <span className='material-symbols-outlined'>image</span>
                    </div>
                    <div className='flex-1'>
                      <p className='font-medium'>Solar-Installation-Site.jpg</p>
                      <p className='text-xs text-gray-500'>Uploaded 3 days ago</p>
                    </div>
                    <button className='text-gray-400 hover:text-gray-600 transition-colors'>
                      <span className='material-symbols-outlined'>more_vert</span>
                    </button>
                  </div>
                </div>
                {/* Next: "Add file preview functionality" */}
              </div>

              <div className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-lg font-semibold'>Upcoming Deadlines</h3>
                  <button className='text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors'>
                    View Calendar
                  </button>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center p-3 border-l-4 border-red-500 bg-red-50 rounded-r-lg'>
                    <div className='flex-1'>
                      <p className='font-medium'>Carbon Offset Report Due</p>
                      <p className='text-xs text-gray-600'>Tomorrow at 5:00 PM</p>
                    </div>
                    <span className='material-symbols-outlined text-red-500'>priority_high</span>
                  </div>
                  <div className='flex items-center p-3 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg'>
                    <div className='flex-1'>
                      <p className='font-medium'>Stakeholder Presentation</p>
                      <p className='text-xs text-gray-600'>Oct 15, 2023 at 10:00 AM</p>
                    </div>
                    <span className='material-symbols-outlined text-amber-500'>warning</span>
                  </div>
                  <div className='flex items-center p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg'>
                    <div className='flex-1'>
                      <p className='font-medium'>Quarterly Sustainability Review</p>
                      <p className='text-xs text-gray-600'>Oct 28, 2023 at 2:00 PM</p>
                    </div>
                    <span className='material-symbols-outlined text-blue-500'>info</span>
                  </div>
                </div>
                {/* Next: "Add reminder setting feature" */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
