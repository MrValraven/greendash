import React from 'react';
import Chart from 'react-apexcharts';
import './style.css';

export const Component = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-[1200px] bg-white rounded-lg shadow-lg p-6 font-sans'>
        <header className='mb-8'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
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
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </div>
              <h1 className='text-2xl font-bold text-gray-800'>GreenDash Analytics</h1>
            </div>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search reports...'
                  className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all'
                />
                <span className='material-symbols-outlined absolute left-3 top-2.5 text-gray-400'>
                  search
                </span>
              </div>
              <div className='flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all cursor-pointer'>
                <span className='material-symbols-outlined'>notifications</span>
                <div className='w-2 h-2 bg-primary-500 rounded-full'></div>
              </div>
              <div className='flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all cursor-pointer'>
                <img
                  src='https://i.pravatar.cc/32'
                  alt='User'
                  className='w-8 h-8 rounded-full border-2 border-primary-500'
                />
                <span className='font-medium'>John Doe</span>
                <span className='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
          </div>
        </header>

        <section className='mb-8'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-800'>Project Overview</h2>
            <div className='flex gap-3'>
              <details className='relative'>
                <summary className='list-none flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50 transition-all'>
                  <span className='material-symbols-outlined'>calendar_today</span>
                  <span>Last 30 days</span>
                  <span className='material-symbols-outlined'>expand_more</span>
                </summary>
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 p-2 border border-gray-200'>
                  <ul>
                    <li className='px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all'>
                      Last 7 days
                    </li>
                    <li className='px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all'>
                      Last 30 days
                    </li>
                    <li className='px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all'>
                      Last 90 days
                    </li>
                    <li className='px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer transition-all'>
                      Custom range
                    </li>
                  </ul>
                </div>
              </details>
              <button className='flex items-center gap-2 bg-primary-600 text-white rounded-lg px-4 py-2 hover:bg-primary-700 transition-all'>
                <span className='material-symbols-outlined'>add</span>
                <span>New Report</span>
              </button>
            </div>
          </div>

          <div className='grid grid-cols-4 gap-6 mb-8'>
            <div className='bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-sm border border-emerald-200 hover:shadow-md transition-all'>
              <div className='flex justify-between mb-4'>
                <div className='p-2 bg-emerald-500 text-white rounded-lg'>
                  <span className='material-symbols-outlined'>description</span>
                </div>
                <div className='text-emerald-500 font-semibold'>+12% ↑</div>
              </div>
              <h3 className='text-2xl font-bold mb-1'>24</h3>
              <p className='text-gray-600'>Total Reports</p>
            </div>

            <div className='bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-6 shadow-sm border border-sky-200 hover:shadow-md transition-all'>
              <div className='flex justify-between mb-4'>
                <div className='p-2 bg-sky-500 text-white rounded-lg'>
                  <span className='material-symbols-outlined'>edit_document</span>
                </div>
                <div className='text-sky-500 font-semibold'>+5% ↑</div>
              </div>
              <h3 className='text-2xl font-bold mb-1'>68%</h3>
              <p className='text-gray-600'>Completion Rate</p>
            </div>

            <div className='bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-6 shadow-sm border border-yellow-200 hover:shadow-md transition-all'>
              <div className='flex justify-between mb-4'>
                <div className='p-2 bg-amber-500 text-white rounded-lg'>
                  <span className='material-symbols-outlined'>timer</span>
                </div>
                <div className='text-amber-500 font-semibold'>-3% ↓</div>
              </div>
              <h3 className='text-2xl font-bold mb-1'>12</h3>
              <p className='text-gray-600'>Days to Deadline</p>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 shadow-sm border border-indigo-200 hover:shadow-md transition-all'>
              <div className='flex justify-between mb-4'>
                <div className='p-2 bg-indigo-500 text-white rounded-lg'>
                  <span className='material-symbols-outlined'>task_alt</span>
                </div>
                <div className='text-indigo-500 font-semibold'>+8% ↑</div>
              </div>
              <h3 className='text-2xl font-bold mb-1'>5</h3>
              <p className='text-gray-600'>Completed Reports</p>
            </div>
          </div>
        </section>

        <section className='mb-8'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-800'>
              Current Project: 2023 Annual Sustainability Report
            </h2>
            <div className='flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
              <span className='w-2 h-2 bg-amber-500 rounded-full'></span>
              <span>In Progress</span>
            </div>
          </div>

          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2 bg-white rounded-xl p-6 shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold mb-4'>Completion Progress by Module</h3>
              <div className='h-[300px]'>
                <Chart
                  type='bar'
                  height={300}
                  width='100%'
                  series={[
                    {
                      name: 'Completed',
                      data: [85, 65, 42, 78, 31, 90],
                    },
                    {
                      name: 'Remaining',
                      data: [15, 35, 58, 22, 69, 10],
                    },
                  ]}
                  options={{
                    chart: {
                      stacked: true,
                      toolbar: {
                        show: false,
                      },
                    },
                    colors: ['#10B981', '#D1D5DB'],
                    plotOptions: {
                      bar: {
                        horizontal: true,
                        borderRadius: 6,
                      },
                    },
                    dataLabels: {
                      enabled: true,
                      formatter: function (val) {
                        return val + '%';
                      },
                    },
                    xaxis: {
                      categories: [
                        'Environmental Impact',
                        'Carbon Footprint',
                        'Social Responsibility',
                        'Governance',
                        'Supply Chain',
                        'Diversity & Inclusion',
                      ],
                      labels: {
                        formatter: function (val) {
                          return val + '%';
                        },
                      },
                    },
                    grid: {
                      borderColor: '#F3F4F6',
                    },
                    legend: {
                      position: 'top',
                    },
                  }}
                />
              </div>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold mb-4'>Overall Completion</h3>
              <div className='h-[300px]'>
                <Chart
                  type='radialBar'
                  height={300}
                  width='100%'
                  series={[68]}
                  options={{
                    chart: {
                      toolbar: {
                        show: false,
                      },
                    },
                    colors: ['#10B981'],
                    plotOptions: {
                      radialBar: {
                        hollow: {
                          size: '70%',
                        },
                        dataLabels: {
                          name: {
                            show: false,
                          },
                          value: {
                            fontSize: '30px',
                            fontWeight: 600,
                            formatter: function (val) {
                              return val + '%';
                            },
                          },
                        },
                      },
                    },
                    labels: ['Completion Rate'],
                  }}
                />
              </div>
              <div className='mt-4'>
                <p className='text-center text-gray-600'>32% remaining to complete</p>
                <button className='w-full mt-4 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2'>
                  <span className='material-symbols-outlined'>play_arrow</span>
                  <span>Continue Working</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-800'>Module Progress Details</h2>
            <button className='text-primary-600 hover:text-primary-700 transition-all flex items-center gap-1'>
              <span>View All Modules</span>
              <span className='material-symbols-outlined'>arrow_forward</span>
            </button>
          </div>

          <div className='grid grid-cols-1 gap-4'>
            <details className='rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden group'>
              <summary className='flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-all'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-emerald-100 text-emerald-600 rounded-lg'>
                    <span className='material-symbols-outlined'>eco</span>
                  </div>
                  <div>
                    <h3 className='font-medium'>Environmental Impact</h3>
                    <p className='text-sm text-gray-500'>Last updated: 2 days ago</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-48 bg-gray-200 rounded-full h-2.5'>
                    <div
                      className='bg-emerald-500 h-2.5 rounded-full'
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                  <span className='font-semibold'>85%</span>
                  <span className='material-symbols-outlined transform group-open:rotate-180 transition-transform'>
                    expand_more
                  </span>
                </div>
              </summary>
              <div className='p-4 bg-gray-50 border-t border-gray-200'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Energy Consumption</h4>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm text-gray-500'>Progress</span>
                      <span className='text-sm font-medium'>92%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-emerald-500 h-1.5 rounded-full'
                        style={{ width: '92%' }}
                      ></div>
                    </div>
                  </div>

                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Waste Management</h4>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm text-gray-500'>Progress</span>
                      <span className='text-sm font-medium'>78%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-emerald-500 h-1.5 rounded-full'
                        style={{ width: '78%' }}
                      ></div>
                    </div>
                  </div>

                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Water Management</h4>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm text-gray-500'>Progress</span>
                      <span className='text-sm font-medium'>85%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-emerald-500 h-1.5 rounded-full'
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button className='bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all flex items-center gap-2'>
                    <span className='material-symbols-outlined'>edit</span>
                    <span>Edit Module</span>
                  </button>
                </div>
              </div>
            </details>

            <details className='rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden group'>
              <summary className='flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-all'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-blue-100 text-blue-600 rounded-lg'>
                    <span className='material-symbols-outlined'>co2</span>
                  </div>
                  <div>
                    <h3 className='font-medium'>Carbon Footprint</h3>
                    <p className='text-sm text-gray-500'>Last updated: 5 days ago</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-48 bg-gray-200 rounded-full h-2.5'>
                    <div className='bg-blue-500 h-2.5 rounded-full' style={{ width: '65%' }}></div>
                  </div>
                  <span className='font-semibold'>65%</span>
                  <span className='material-symbols-outlined transform group-open:rotate-180 transition-transform'>
                    expand_more
                  </span>
                </div>
              </summary>
              <div className='p-4 bg-gray-50 border-t border-gray-200'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Emissions by Source</h4>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm text-gray-500'>Progress</span>
                      <span className='text-sm font-medium'>72%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-blue-500 h-1.5 rounded-full'
                        style={{ width: '72%' }}
                      ></div>
                    </div>
                  </div>

                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Reduction Targets</h4>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm text-gray-500'>Progress</span>
                      <span className='text-sm font-medium'>58%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-blue-500 h-1.5 rounded-full'
                        style={{ width: '58%' }}
                      ></div>
                    </div>
                  </div>

                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Carbon Offsetting</h4>
                    <div className='flex justify-between mb-1'>
                      <span className='text-sm text-gray-500'>Progress</span>
                      <span className='text-sm font-medium'>65%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-1.5'>
                      <div
                        className='bg-blue-500 h-1.5 rounded-full'
                        style={{ width: '65%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button className='bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all flex items-center gap-2'>
                    <span className='material-symbols-outlined'>edit</span>
                    <span>Edit Module</span>
                  </button>
                </div>
              </div>
            </details>

            <details className='rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden group'>
              <summary className='flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-all'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-purple-100 text-purple-600 rounded-lg'>
                    <span className='material-symbols-outlined'>diversity_3</span>
                  </div>
                  <div>
                    <h3 className='font-medium'>Social Responsibility</h3>
                    <p className='text-sm text-gray-500'>Last updated: 1 week ago</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='w-48 bg-gray-200 rounded-full h-2.5'>
                    <div
                      className='bg-purple-500 h-2.5 rounded-full'
                      style={{ width: '42%' }}
                    ></div>
                  </div>
                  <span className='font-semibold'>42%</span>
                  <span className='material-symbols-outlined transform group-open:rotate-180 transition-transform'>
                    expand_more
                  </span>
                </div>
              </summary>

              <div className='p-4 bg-gray-50 border-t border-gray-200'>
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Community Engagement</h4>
                    <div className='space-y-3'>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm text-gray-500'>Outreach Programs</span>
                          <span className='text-sm font-medium'>58%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-1.5'>
                          <div
                            className='bg-purple-500 h-1.5 rounded-full'
                            style={{ width: '58%' }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm text-gray-500'>Volunteer Hours</span>
                          <span className='text-sm font-medium'>35%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-1.5'>
                          <div
                            className='bg-purple-500 h-1.5 rounded-full'
                            style={{ width: '35%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white p-4 rounded-lg border border-gray-200'>
                    <h4 className='font-medium mb-2'>Labor Practices</h4>
                    <div className='space-y-3'>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm text-gray-500'>Fair Compensation</span>
                          <span className='text-sm font-medium'>45%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-1.5'>
                          <div
                            className='bg-purple-500 h-1.5 rounded-full'
                            style={{ width: '45%' }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className='flex justify-between mb-1'>
                          <span className='text-sm text-gray-500'>Workplace Safety</span>
                          <span className='text-sm font-medium'>32%</span>
                        </div>
                        <div className='w-full bg-gray-200 rounded-full h-1.5'>
                          <div
                            className='bg-purple-500 h-1.5 rounded-full'
                            style={{ width: '32%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white p-4 rounded-lg border border-gray-200'>
                  <h4 className='font-medium mb-3'>Diversity & Inclusion Initiatives</h4>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='p-3 rounded-lg bg-purple-50 border border-purple-100 hover:shadow-md transition-all'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-medium'>Hiring Practices</span>
                        <span className='text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5'>
                          38%
                        </span>
                      </div>
                    </div>
                    <div className='p-3 rounded-lg bg-purple-50 border border-purple-100 hover:shadow-md transition-all'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-medium'>Training Programs</span>
                        <span className='text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5'>
                          45%
                        </span>
                      </div>
                    </div>
                    <div className='p-3 rounded-lg bg-purple-50 border border-purple-100 hover:shadow-md transition-all'>
                      <div className='flex items-center justify-between'>
                        <span className='text-sm font-medium'>Pay Equity</span>
                        <span className='text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5'>
                          40%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button className='bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all flex items-center gap-2'>
                    <span className='material-symbols-outlined'>edit</span>
                    <span>Edit Module</span>
                  </button>
                </div>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};
