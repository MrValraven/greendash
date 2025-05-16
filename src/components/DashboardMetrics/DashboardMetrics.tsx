import React from 'react';
import dashboardMetricCards from './dashboardMetrics.json';

type DashboardMetric = {
  label: string;
  value: string;
  unit: string;
  change: string;
  changeType: string;
  changeColor: string;
  icon: string;
  iconBg: string;
  iconColor: string;
};

const DashboardMetrics: React.FC = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {dashboardMetricCards.map((card: DashboardMetric, index: number) => (
        <div
          key={index}
          className='bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200'
        >
          <div className='flex justify-between items-start'>
            <div>
              <p className='text-gray-500 text-sm'>{card.label}</p>
              <h3 className='text-2xl font-bold mt-1'>
                {card.value} <span className='text-sm font-normal'>{card.unit}</span>
              </h3>
              <p className={`${card.changeColor} text-sm flex items-center mt-1`}>
                <span className='material-symbols-outlined text-sm mr-1'>
                  {card.changeType === 'up' ? 'trending_up' : 'trending_down'}
                </span>
                {card.change}
              </p>
            </div>
            <div className={`${card.iconBg} p-2 rounded-lg`}>
              <span className={`material-symbols-outlined ${card.iconColor}`}>{card.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardMetrics;
