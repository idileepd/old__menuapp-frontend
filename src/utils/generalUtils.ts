import { theme } from '@/constants';
import { DefaultFoodAttributeEnum } from '@/types';

export const getFoodAttributeColor = (foodType: string) => {
  if (
    foodType.toLowerCase() === DefaultFoodAttributeEnum.MUST_TRY.toLowerCase()
  ) {
    return theme.colors.foodAttributes.mustTry;
  }

  return theme.colors.foodAttributes.bestSeller;
};
