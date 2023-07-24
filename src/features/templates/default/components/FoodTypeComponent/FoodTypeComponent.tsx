import { FoodTypeEggIcon, FoodTypeNonVegIcon } from '../icons';
import { FoodTypeIcon } from '../icons/FoodTypeIcon';

import { DefaultFoodTypeEnum } from '@/types/businessTypes';

export const FoodTypeComponent = (props: { foodType: string }) => {
  const { foodType } = props;

  if (foodType === DefaultFoodTypeEnum.VEG) {
    return <FoodTypeIcon />;
  }

  if (foodType === DefaultFoodTypeEnum.EGG) {
    return <FoodTypeEggIcon />;
  }

  return <FoodTypeNonVegIcon />;
};
