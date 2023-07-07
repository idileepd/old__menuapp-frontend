import { FC } from 'react';

import { FoodTypeIcon } from './FoodTypeIcon';

import { SVGProps } from '@/types/SvgProps';

export const FoodTypeNonVegIcon: FC<SVGProps> = ({
  width = 14,
  height = 14,
  cursor,
  fill = '#A65B43',
}) => {
  return (
    <FoodTypeIcon width={width} height={height} cursor={cursor} fill={fill} />
  );
};
