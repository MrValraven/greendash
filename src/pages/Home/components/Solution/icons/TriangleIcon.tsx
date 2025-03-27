import { ComponentType, SVGProps } from 'react';

const TriangleIcon: ComponentType<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className='solution-triangle-icon'
      {...props}
      viewBox='0 0 16 16'
      fill='#399c17'
      stroke='#399c17'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path d='M16 15H0V12L7 0H9L16 12V15Z' fill='#399c17'></path>{' '}
      </g>
    </svg>
  );
};

export default TriangleIcon;
