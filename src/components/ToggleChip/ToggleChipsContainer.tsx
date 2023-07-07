import { createUseStyles } from 'react-jss';

import { FoodTypeEggIcon, FoodTypeNonVegIcon, FoodTypeVegIcon } from '../icons';

import { ToggleChip } from './ToggleChip';

import { FilterChipType, Theme } from '@/types';

const containerStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
    // flexWrap: 'wrap',
    marginTop: '8px',
    marginBottom: '12px',
    gap: '4px',
    // width: '100%',
    backgroundColor: theme.colors.background.paper,
    '&::-webkit-scrollbar': {
      width: '0',
    },
  },
}));

export const ToggleChipsContainer = (props: { chips: FilterChipType[] }) => {
  const classes = containerStyles();
  const { chips } = props;

  const getChipIcon = (chip: string) => {
    const chipName = chip.toLowerCase();
    if (chipName === 'veg') {
      return FoodTypeVegIcon;
    }
    if (chipName === 'non veg') {
      return FoodTypeNonVegIcon;
    }
    if (chipName === 'egg') {
      return FoodTypeEggIcon;
    }

    return undefined;
  };

  return (
    <div className={classes.container}>
      {chips.map((chip) => (
        <ToggleChip
          key={chip.name}
          name={chip.name}
          icon={getChipIcon(chip.name)}
          isSelected={chip.isSelected}
        />
      ))}
    </div>
  );
};
