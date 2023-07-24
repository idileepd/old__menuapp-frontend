import { FC } from 'react';

import { FoodTypeIcon } from './FoodTypeIcon';

import { SVGProps } from '@/types/SvgProps';

export const FoodTypeVegIcon: FC<SVGProps> = ({
  width = 14,
  height = 14,
  cursor,
  fill = '#249640',
}) => {
  return (
    <FoodTypeIcon width={width} height={height} cursor={cursor} fill={fill} />
  );
};
