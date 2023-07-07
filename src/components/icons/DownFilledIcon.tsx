import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const DownFilledIcon: FC<SVGProps> = ({
  width = 12,
  height = 12,
  stroke = '#363B4E',
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
      <path d="M6 10L0.803848 4H11.1962L6 10Z" fill={stroke} />
    </svg>
  );
};
