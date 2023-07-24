import { FC } from 'react';

import { FoodTypeIcon } from './FoodTypeIcon';

import { SVGProps } from '@/types/SvgProps';

export const FoodTypeEggIcon: FC<SVGProps> = ({
  width = 14,
  height = 14,
  cursor,
  fill = '#DC9D09',
}) => {
  return (
    <FoodTypeIcon width={width} height={height} cursor={cursor} fill={fill} />
  );
};
