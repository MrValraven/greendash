import React from 'react';

import './style.css';

export const Component = () => {
  return (
    <div data-id='YHXf' className='w-[1000px] bg-white rounded-lg shadow-lg p-8 font-sans'>
      <div data-id='0tMw' className='mb-8'>
        <h1 data-id='pLso' className='text-3xl font-bold text-primary-700'>
          ESG Compliance Assessment
        </h1>
        <p data-id='gQbM' className='text-gray-600 mt-2'>
          Complete the following steps to assess your organization's compliance with ESG
          regulations.
        </p>
      </div>
      <div data-id='8hrT'>
        <div data-id='wl1l' className='flex gap-6 mb-8'>
          <div data-id='2OaI' className='w-3/4'>
            <div
              data-id='44N9'
              className='bg-primary-50 p-4 rounded-lg border border-primary-100 mb-2'
            >
              <div data-id='0PDk' className='flex items-center text-primary-700'>
                <span data-id='pjHO' className='material-symbols-outlined mr-2'>
                  info
                </span>
                <p data-id='KvXb' className='text-sm font-medium'>
                  Please fill out all required fields to proceed to the next step.
                </p>
              </div>
            </div>
          </div>
          <div data-id='b9O7' className='w-1/4 bg-gray-50 p-4 rounded-lg border border-gray-200'>
            <h3
              data-id='vTDx'
              className='text-md font-semibold text-gray-700 mb-3 flex items-center'
            >
              <span data-id='y4jy' className='material-symbols-outlined mr-1 text-primary-600'>
                checklist
              </span>
              Assessment Progress
            </h3>
            <div data-id='RJ__' className='space-y-2'>
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div data-id='IvAK' key={step} className='flex items-center'>
                  <div
                    data-id='Ct0U'
                    className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${
                      step === 1
                        ? 'bg-primary-100 text-primary-700 border border-primary-300'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {step === 1 ? (
                      <span data-id='JJlL' className='material-symbols-outlined text-[14px]'>
                        edit
                      </span>
                    ) : (
                      <span data-id='2ddP' className='text-xs'>
                        {step}
                      </span>
                    )}
                  </div>
                  <span
                    data-id='kNsN'
                    className={`text-xs ${
                      step === 1 ? 'text-primary-700 font-medium' : 'text-gray-500'
                    }`}
                  >
                    Step {step} {step === 1 ? '(in progress)' : ''}
                  </span>
                </div>
              ))}
            </div>
            <div data-id='bMSN' className='mt-4 pt-4 border-t border-gray-200'>
              <div
                data-id='hU5h'
                className='flex items-center justify-between text-xs text-gray-500'
              >
                <span data-id='MLl3'>Completion:</span>
                <span data-id='rSkn' className='font-medium'>
                  0%
                </span>
              </div>
              <div data-id='12J6' className='w-full bg-gray-200 rounded-full h-1.5 mt-1'>
                <div
                  data-id='GXFg'
                  className='bg-primary-600 h-1.5 rounded-full w-0 transition-all duration-500'
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div data-id='aMXO' className='relative mb-8'>
          <div data-id='Rnhx' className='flex justify-between items-center relative z-10'>
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                data-id='lWTw'
                key={step}
                className={`flex flex-col items-center ${
                  step === 1 ? 'text-primary-700' : 'text-gray-400'
                }`}
              >
                <div
                  data-id='ecSw'
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    step === 1 ? 'bg-primary-700 text-white' : 'bg-gray-200'
                  }`}
                >
                  {step}
                </div>
                <span data-id='xROu' className='text-sm font-medium'>
                  Step {step}
                </span>
              </div>
            ))}
          </div>
          <div
            data-id='JxjE'
            className='absolute top-5 left-[55px] right-[55px] h-1 bg-gray-200 -z-0'
          >
            <div
              data-id='K6hQ'
              className='h-full bg-primary-700 w-0 transition-all duration-500 ease-in-out'
            ></div>
          </div>
        </div>

        <div data-id='zQOw' className='bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8'>
          <h2 data-id='FfDg' className='text-xl font-semibold mb-4 text-primary-800'>
            Step 1: Organization Information
          </h2>

          <div data-id='KFhP' className='grid grid-cols-2 gap-6'>
            <div data-id='hSkN' className='col-span-2'>
              <label data-id='bWr2' className='block text-sm font-medium text-gray-700 mb-1'>
                Organization Name
              </label>
              <input
                data-id='svII'
                type='text'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all peer'
                placeholder='Enter organization name'
                required
              />
            </div>

            <div data-id='Mag4'>
              <label data-id='L2Ee' className='block text-sm font-medium text-gray-700 mb-1'>
                Industry Sector
              </label>
              <select
                data-id='pv8o'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all'
              >
                <option data-id='HUZf' value=''>
                  Select industry sector
                </option>
                <option data-id='ukwT' value='technology'>
                  Technology
                </option>
                <option data-id='6MBh' value='finance'>
                  Finance
                </option>
                <option data-id='6yw4' value='healthcare'>
                  Healthcare
                </option>
                <option data-id='E01a' value='manufacturing'>
                  Manufacturing
                </option>
                <option data-id='M87L' value='energy'>
                  Energy
                </option>
                <option data-id='ua5E' value='retail'>
                  Retail
                </option>
                <option data-id='b3Op' value='other'>
                  Other
                </option>
              </select>

              <div data-id='OC6W'>
                <p
                  data-id='bmAi'
                  className='mt-1 invisible peer-invalid:visible text-red-600 text-xs'
                >
                  Please select an industry sector
                </p>
              </div>
            </div>

            <div data-id='Mx_v'>
              <label data-id='37LL' className='block text-sm font-medium text-gray-700 mb-1'>
                Company Size
              </label>
              <select
                data-id='dwQJ'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all peer'
                required
              >
                <option data-id='fLaQ' value=''>
                  Select company size
                </option>
                <option data-id='4rFz' value='small'>
                  Small (1-49 employees)
                </option>
                <option data-id='ShmW' value='medium'>
                  Medium (50-249 employees)
                </option>
                <option data-id='SQFY' value='large'>
                  Large (250-999 employees)
                </option>
                <option data-id='RXbO' value='enterprise'>
                  Enterprise (1000+ employees)
                </option>
              </select>

              <div data-id='eo3r'>
                <p
                  data-id='tHjH'
                  className='mt-1 invisible peer-invalid:visible text-red-600 text-xs'
                >
                  Please select company size
                </p>
              </div>
            </div>

            <div data-id='H8MZ'>
              <label data-id='DYtp' className='block text-sm font-medium text-gray-700 mb-1'>
                Annual Revenue (USD)
              </label>
              <select
                data-id='UIjD'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all'
              >
                <option data-id='bZWV' value=''>
                  Select annual revenue
                </option>
                <option data-id='qf2c' value='under1m'>
                  Under $1 million
                </option>
                <option data-id='tBI_' value='1m-10m'>
                  $1 million - $10 million
                </option>
                <option data-id='0aeo' value='10m-50m'>
                  $10 million - $50 million
                </option>
                <option data-id='dI55' value='50m-100m'>
                  $50 million - $100 million
                </option>
                <option data-id='g9ch' value='100m-1b'>
                  $100 million - $1 billion
                </option>
                <option data-id='Jm8F' value='over1b'>
                  Over $1 billion
                </option>
              </select>

              <div data-id='num_'>
                <p
                  data-id='i_ZD'
                  className='mt-1 invisible peer-invalid:visible text-red-600 text-xs'
                >
                  Please select annual revenue
                </p>
              </div>
            </div>

            <div data-id='uqhZ'>
              <label data-id='4ZTs' className='block text-sm font-medium text-gray-700 mb-1'>
                Year Founded
              </label>
              <input
                data-id='sKri'
                type='number'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all peer'
                placeholder='Enter year founded'
                min='1900'
                max='2023'
                required
              />

              <div data-id='lTw5'>
                <p
                  data-id='gmSs'
                  className='mt-1 invisible peer-invalid:visible text-red-600 text-xs'
                >
                  Please enter a valid year (1900-2023)
                </p>
              </div>
            </div>

            <div data-id='9Qns' className='col-span-2'>
              <label data-id='3ZIy' className='block text-sm font-medium text-gray-700 mb-1'>
                Headquarters Location
              </label>
              <input
                data-id='cSvN'
                type='text'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all'
                placeholder='City, Country'
              />
            </div>

            <div data-id='PVa2' className='col-span-2'>
              <label data-id='3OQw' className='block text-sm font-medium text-gray-700 mb-1'>
                Operating Regions
              </label>
              <div data-id='9WLo' className='grid grid-cols-3 gap-3 mt-1'>
                {[
                  'North America',
                  'South America',
                  'Europe',
                  'Asia',
                  'Africa',
                  'Australia/Oceania',
                  'Global',
                ].map((region) => (
                  <div data-id='MxV0' key={region} className='flex items-center'>
                    <input
                      data-id='aw1F'
                      type='checkbox'
                      id={region}
                      className='h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-all hover:shadow-sm'
                    />
                    <label data-id='cw5C' htmlFor={region} className='ml-2 text-sm text-gray-700'>
                      {region}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div data-id='TZrE' className='col-span-2'>
              <label data-id='adPN' className='block text-sm font-medium text-gray-700 mb-1'>
                Primary Contact Information
              </label>
              <div data-id='FHDp' className='grid grid-cols-2 gap-4'>
                <input
                  data-id='2jn6'
                  type='text'
                  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all'
                  placeholder='Full Name'
                />
                <input
                  data-id='FzJw'
                  type='email'
                  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all peer'
                  placeholder='Email Address'
                  required
                />
                <input
                  data-id='MxX0'
                  type='tel'
                  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all peer'
                  placeholder='Phone Number'
                  required
                />
                <input
                  data-id='bRsg'
                  type='text'
                  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all peer'
                  placeholder='Job Title'
                  required
                />
              </div>
              <div data-id='zkmx'>
                <p
                  data-id='DZ8y'
                  className='mt-2 invisible peer-invalid:visible text-red-600 text-xs'
                >
                  Please provide all contact information
                </p>
              </div>
            </div>
          </div>
        </div>

        <details
          data-id='WLlW'
          className='mb-6 group transition-all duration-300 hover:bg-primary-50 rounded-md p-1'
        >
          <summary
            data-id='eFwS'
            className='flex items-center cursor-pointer text-sm text-primary-600 font-medium hover:text-primary-800 transition-colors'
          >
            <span
              data-id='XgFb'
              className='material-symbols-outlined mr-1 text-base group-open:rotate-180 transition-transform duration-300'
            >
              expand_more
            </span>
            What information will I need to complete this assessment?
          </summary>
          <div data-id='qdDq' className='mt-2 pl-6 text-sm text-gray-600 animate-fadeIn'>
            <p data-id='8FMY'>
              To complete this ESG compliance assessment, you'll need information about your
              organization's:
            </p>
            <ul data-id='4Y2O' className='list-disc pl-5 mt-2 space-y-1'>
              <li data-id='A29d'>Environmental policies and carbon footprint data</li>
              <li data-id='xz5E'>Social responsibility initiatives and workplace policies</li>
              <li data-id='tiHb'>Governance structure and ethical guidelines</li>
              <li data-id='vCgV'>Supply chain management and sustainability practices</li>
              <li data-id='Yzg7'>Risk management processes related to ESG factors</li>
            </ul>
          </div>
        </details>

        <div data-id='FpGG' className='flex justify-between mt-8'>
          <button
            data-id='xs78'
            type='button'
            className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all opacity-50 cursor-not-allowed'
            disabled
          >
            Previous
          </button>

          <button
            data-id='9Xmf'
            type='button'
            className='px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all transform hover:translate-y-[-2px] hover:shadow-md group'
          >
            Next Stepd
          </button>
        </div>

        <div data-id='aobM' className='flex justify-center mt-8 text-sm relative'>
          <button
            data-id='ULdq'
            className='text-primary-600 hover:text-primary-800 hover:underline focus:outline-none transition-colors flex items-center'
            type='button'
          >
            <span data-id='eZSc' className='material-symbols-outlined mr-1 text-sm'>
              save
            </span>
            Save Progress & Continued Later
          </button>
          <span data-id='9RUf' className='mx-3 text-gray-300'>
            |
          </span>
          <button
            data-id='2cyy'
            className='text-primary-600 hover:text-primary-800 hover:underline focus:outline-none transition-colors flex items-center hover:scale-105 transition-transform duration-200'
            type='button'
          >
            <span data-id='N0Dv' className='material-symbols-outlined mr-1 text-sm'>
              help_outline
            </span>
            Need Help?
          </button>
        </div>
        {/* Next: "Add form validation with visual feedback" */}
        {/* Next: "Add micro-interactions like progress animation when moving between steps" */}
        {/* Next: "Add a summary sidebar that shows completion status for each section" */}
      </div>
    </div>
  );
};
