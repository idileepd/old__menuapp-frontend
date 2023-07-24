import { createUseStyles } from 'react-jss';
import { FC } from 'react';

import { CloseIcon } from '../icons';

import { Theme } from '@/types/Theme';
import { SVGProps } from '@/types/SvgProps';

const toggleChipStyles = createUseStyles((theme: Theme) => ({
  toggleChip: {
    display: 'flex',
    // width: 'max-content',
    // minWidth: '100px',
    // maxWidth: '10000px',
    alignItems: 'center',
    backgroundColor: theme.colors.background.white,
    borderRadius: '9px',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    cursor: 'pointer',
    padding: '.7rem .7rem',
    gap: '4px',
    userSelect: 'none',
    height: '2.8rem',
    margin: '2px 2px',
  },
  name: {
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '-0.22px',
  },
  selected: {
    // boxShadow: 'none',
    // border: `1px solid ${theme.colors.primary.main}}`,
    boxShadow: `${theme.colors.primary.main} 0px 0px 0px 1px`,
  },
}));

interface IToggleChip {
  id: string;
  name: string;
  isSelected?: boolean;
  icon?: FC<SVGProps>;
  onSelectTag: (tagId: string) => void;
}

export const FilterTagChip = (props: IToggleChip) => {
  const { id, name, icon: Icon, isSelected, onSelectTag } = props;
  const classes = toggleChipStyles();

  return (
    <div
      className={`${classes.toggleChip} ${isSelected ? classes.selected : ''}`}
      onClick={() => onSelectTag(id)}
    >
      {Icon && <Icon />}
      <div className={classes.name}>{name}</div>
      {isSelected && <CloseIcon width={10} height={10} strokeWidth={3} />}
    </div>
  );
};
