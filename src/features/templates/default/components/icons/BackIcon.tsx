import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const BackIcon: FC<SVGProps> = ({
  width = 24,
  height = 24,
  fill = 'none',
  cursor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      width={width}
      height={height}
      cursor={cursor}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};
