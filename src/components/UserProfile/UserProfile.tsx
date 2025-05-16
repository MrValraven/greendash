import React from 'react';

import './UserProfile.css';

export const UserProfileTailwind = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[550px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]'>
        {/* Profile Header */}
        <div className='relative h-[150px] bg-gradient-to-r from-primary-600 to-primary-400'>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
            <div className='relative'>
              <img
                src='https://randomuser.me/api/portraits/women/44.jpg'
                alt='Profile Photo'
                className='w-[120px] h-[120px] rounded-full border-4 border-white object-cover transition-all duration-300 hover:scale-105'
              />
              <span className='absolute bottom-3 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white'></span>
            </div>
          </div>
          {/* Next: "Add a banner upload option with hover effect" */}
        </div>

        {/* Profile Info */}
        <div className='pt-16 px-6 pb-6'>
          <div className='text-center mb-4'>
            <h3 className='text-xl font-bold'>Sarah Johnson</h3>
            <p className='text-gray-500 text-sm'>UX/UI Designer at TechCorp</p>

            <div className='flex items-center justify-center mt-2 space-x-1'>
              <span className='text-yellow-400 text-lg'>★</span>
              <span className='text-yellow-400 text-lg'>★</span>
              <span className='text-yellow-400 text-lg'>★</span>
              <span className='text-yellow-400 text-lg'>★</span>
              <span className='text-gray-300 text-lg'>★</span>
              <span className='text-gray-600 text-sm ml-1'>(4.2)</span>
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-4 mb-6 text-center'>
            <div className='bg-gray-50 py-3 px-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
              <h4 className='text-primary-600 font-bold text-xl'>248</h4>
              <p className='text-gray-500 text-xs'>Projects</p>
            </div>
            <div className='bg-gray-50 py-4 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
              <h4 className='text-primary-600 font-bold text-xl'>7.5k</h4>
              <p className='text-gray-500 text-xs'>Followers</p>
            </div>
            <div className='bg-gray-50 py-4 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
              <h4 className='text-primary-600 font-bold text-xl'>156</h4>
              <p className='text-gray-500 text-xs'>Following</p>
            </div>
          </div>
          {/* Next: "Add expandable project showcase section" */}

          {/* Skills */}
          <div className='mb-6'>
            <h4 className='text-sm font-semibold mb-2'>Skills</h4>
            <div className='flex flex-wrap gap-2'>
              <span className='px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full hover:bg-primary-100 transition-colors duration-300'>
                Figma
              </span>
              <span className='px-4 py-1.5 bg-primary-50 text-primary-600 text-sm rounded-full hover:bg-primary-100 transition-colors duration-300'>
                UI Design
              </span>
              <span className='px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full hover:bg-primary-100 transition-colors duration-300'>
                Prototyping
              </span>
              <span className='px-4 py-1.5 bg-primary-50 text-primary-600 text-sm rounded-full hover:bg-primary-100 transition-colors duration-300'>
                Wireframing
              </span>
              <span className='px-4 py-1.5 bg-primary-50 text-primary-600 text-sm rounded-full hover:bg-primary-100 transition-colors duration-300'>
                Adobe XD
              </span>
            </div>
          </div>

          {/* Available for work */}
          <div className='flex items-center justify-between bg-primary-50 p-4 rounded-lg mb-6'>
            <div className='flex items-center gap-2'>
              <span className='material-symbols-outlined text-primary-500'>work</span>
              <span className='text-sm'>Available for freelance work</span>
            </div>
            <details className='relative'>
              <summary className='list-none cursor-pointer'>
                <span className='material-symbols-outlined text-gray-500 hover:text-primary-500 transition-colors'>
                  more_vert
                </span>
              </summary>
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10'>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  View Details
                </a>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Send Message
                </a>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Report Profile
                </a>
              </div>
            </details>
          </div>
          {/* Next: "Add an availability calendar widget" */}

          {/* Action Buttons */}
          <div className='flex gap-3'>
            <button className='flex-1 bg-primary-600 text-white py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center'>
              <span className='material-symbols-outlined mr-1 text-sm'>chat</span>
              Message
            </button>
            <button className='flex-1 border border-primary-600 text-primary-600 py-2.5 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center'>
              <span className='material-symbols-outlined mr-1 text-sm'>person_add</span>
              Follow
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className='border-t border-gray-200 px-6 py-4'>
          <div className='flex justify-center space-x-6'>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-gray-500 hover:text-primary-600 transition-colors duration-300'
            >
              <i className='fa-brands fa-twitter text-xl'></i>
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-gray-500 hover:text-primary-600 transition-colors duration-300'
            >
              <i className='fa-brands fa-linkedin text-2xl'></i>
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-gray-500 hover:text-primary-600 transition-colors duration-300'
            >
              <i className='fa-brands fa-dribbble text-xl'></i>
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-gray-500 hover:text-primary-600 transition-colors duration-300'
            >
              <i className='fa-brands fa-behance text-2xl'></i>
            </a>
            <a
              href='https://webcrumbs.cloud/placeholder'
              className='text-gray-500 hover:text-primary-600 transition-colors duration-300'
            >
              <i className='fa-brands fa-instagram text-2xl'></i>
            </a>
          </div>
        </div>
        {/* Next: "Add recent activity feed section" */}
      </div>
    </div>
  );
};
