import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './ProgressRing.css';

const ApexChart = () => {
  const [state, setState] = React.useState({
    series: [30, 22, 48],

    options: {
      labels: ['Completed', 'On going', 'Not started'],
      colors: ['#5fbc3f', '#b7eca5', '#efeff1'],
      chart: {
        type: 'donut' as 'donut',
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div className='progress-ring'>
      <h3>Report Progress 2025</h3>
      <div id='chart'>
        <ReactApexChart
          width={'100%'}
          height={'100%'}
          options={state.options}
          series={state.series}
          type='donut'
        />
      </div>
      <div id='html-dist'></div>
    </div>
  );
};

export default ApexChart;
