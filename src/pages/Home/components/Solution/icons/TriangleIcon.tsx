import { ComponentType, SVGProps } from 'react';

const TriangleIcon: ComponentType<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z'
          fill='#000000'
        ></path>{' '}
      </g>
    </svg>
  );
};

export default TriangleIcon;
