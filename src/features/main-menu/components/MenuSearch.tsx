import { Search } from '@/components/Search';
import { ToggleChipsContainer } from '@/components/ToggleChip/ToggleChipsContainer';
import { FilterChipItemType, FilterChipType } from '@/types';

export const MenuSearch = () => {
  const chips: FilterChipType[] = [
    { isSelected: false, name: 'Veg', type: FilterChipItemType.FOOD_TYPE },
    { isSelected: false, name: 'Non Veg', type: FilterChipItemType.FOOD_TYPE },
    { isSelected: false, name: 'Egg', type: FilterChipItemType.FOOD_TYPE },
    { isSelected: true, name: 'Bestseller', type: FilterChipItemType.GENERAL },
    { isSelected: false, name: 'Spicy', type: FilterChipItemType.GENERAL },
    { isSelected: false, name: 'Top rated', type: FilterChipItemType.GENERAL },
    {
      isSelected: false,
      name: 'Kid Friendly',
      type: FilterChipItemType.GENERAL,
    },
  ];

  return (
    <div style={{ width: '97%', margin: 'auto' }}>
      <Search />
      <ToggleChipsContainer chips={chips} />
    </div>
  );
};
