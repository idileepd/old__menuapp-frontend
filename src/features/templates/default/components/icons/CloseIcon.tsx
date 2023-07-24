import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const CloseIcon: FC<SVGProps> = ({
  width = 24,
  height = 24,
  stroke = '#363B4E',
  strokeWidth = 1.5,
  cursor,
  onClick,
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
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
