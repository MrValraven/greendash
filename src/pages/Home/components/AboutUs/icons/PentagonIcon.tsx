import { ComponentType, SVGProps } from 'react';

const PentagonIcon: ComponentType<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.8598 6.36985L11.9298 0.829849C10.8598 -0.0301508 9.1298 -0.0301508 8.0698 0.819849L1.13978 6.36985C0.359777 6.98985 -0.140223 8.2998 0.0297768 9.2798L1.35978 17.2398C1.59978 18.6598 2.95978 19.8098 4.39978 19.8098H15.5998C17.0298 19.8098 18.3998 18.6498 18.6398 17.2398L19.9698 9.2798C20.1298 8.2998 19.6298 6.98985 18.8598 6.36985ZM9.9998 13.4998C8.6198 13.4998 7.49978 12.3798 7.49978 10.9998C7.49978 9.6198 8.6198 8.4998 9.9998 8.4998C11.3798 8.4998 12.4998 9.6198 12.4998 10.9998C12.4998 12.3798 11.3798 13.4998 9.9998 13.4998Z'
        fill='#0D2818'
      />
    </svg>
  );
};

export default PentagonIcon;
