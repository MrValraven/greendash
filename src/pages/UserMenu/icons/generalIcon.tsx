import React from 'react';

type Props = {};

const generalIcon = (props: Props) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='10'
        cy='9.5'
        r='7.5'
        stroke='#2F2B3D'
        stroke-opacity='0.7'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <circle
        cx='10'
        cy='9.5'
        r='2.5'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.5 8.75016C2.08579 8.75016 1.75 9.08595 1.75 9.50016C1.75 9.91438 2.08579 10.2502 2.5 10.2502V8.75016ZM7.5 10.2502C7.91421 10.2502 8.25 9.91438 8.25 9.50016C8.25 9.08595 7.91421 8.75016 7.5 8.75016V10.2502ZM12.5 8.75016C12.0858 8.75016 11.75 9.08595 11.75 9.50016C11.75 9.91438 12.0858 10.2502 12.5 10.2502V8.75016ZM17.5 10.2502C17.9142 10.2502 18.25 9.91438 18.25 9.50016C18.25 9.08595 17.9142 8.75016 17.5 8.75016V10.2502ZM2.5 9.50016V10.2502H7.5V9.50016V8.75016H2.5V9.50016ZM12.5 9.50016V10.2502H17.5V9.50016V8.75016H12.5V9.50016Z'
        fill='#2F2B3D'
        fill-opacity='0.9'
      />
    </svg>
  );
};

export default generalIcon;
