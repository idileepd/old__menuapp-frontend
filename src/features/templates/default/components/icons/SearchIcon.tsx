import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const SearchIcon: FC<SVGProps> = ({
  width = 24,
  height = 24,
  stroke = '#EF4F5F',
  strokeWidth = 1.5,
  cursor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={stroke}
      width={width}
      height={height}
      cursor={cursor}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};
