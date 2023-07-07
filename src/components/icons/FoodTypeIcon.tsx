import { FC } from 'react';

import { SVGProps } from '@/types/SvgProps';

export const FoodTypeIcon: FC<SVGProps> = ({
  width = 14,
  height = 14,
  cursor,
  fill = '#249640',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      cursor={cursor}
    >
      <rect width="14" height="14" rx="3" fill={fill} />
      <rect x="1" y="1" width="12" height="12" rx="2" fill="white" />
      <circle cx="7" cy="7" r="4" fill={fill} />
    </svg>
  );
};
