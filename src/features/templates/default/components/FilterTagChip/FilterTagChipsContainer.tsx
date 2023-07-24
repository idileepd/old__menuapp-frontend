import { createUseStyles } from 'react-jss';

import { FoodTypeEggIcon, FoodTypeNonVegIcon, FoodTypeVegIcon } from '../icons';

import { FilterTagChip } from './FilterTagChip';

import { Tag, Theme } from '@/types';

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

export const FilterTagChipsContainer = (props: {
  allTags: { [key: string]: Tag };
  selectedTags: { [key: string]: string };
  onSelectTag: (tagId: string) => void;
}) => {
  const classes = containerStyles();
  const { allTags, selectedTags, onSelectTag } = props;

  const getChipIcon = (chip: string) => {
    const chipName = chip.toLowerCase();
    if (chipName === 'veg') {
      return FoodTypeVegIcon;
    }
    if (chipName === 'nonveg') {
      return FoodTypeNonVegIcon;
    }
    if (chipName === 'egg') {
      return FoodTypeEggIcon;
    }

    return undefined;
  };

  return (
    <div className={classes.container}>
      {Object.keys(allTags).map((tagId) => {
        const tag = allTags[tagId];

        return (
          <FilterTagChip
            key={tag._id}
            id={tag._id}
            onSelectTag={onSelectTag}
            name={tag.name}
            icon={getChipIcon(tag.name)}
            isSelected={!!selectedTags[tag._id]}
          />
        );
      })}
    </div>
  );
};
