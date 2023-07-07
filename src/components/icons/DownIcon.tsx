import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const DownIcon: FC<SVGProps> = ({
  width = 12,
  height = 12,
  stroke = '#212736',
  cursor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      width={width}
      height={height}
      cursor={cursor}
    >
      <path
        d="M9.75 4.125L6 7.875L2.25 4.125"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
