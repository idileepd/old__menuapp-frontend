import { createUseStyles } from 'react-jss';
import { useState } from 'react';

import { DownFilledIcon } from '../icons';

import { Theme } from '@/types/Theme';
import { ElementIDs } from '@/constants/elementIDs';

const mainCategoryStyles = createUseStyles((theme: Theme) => ({
  primaryCategoryRoot: {
    backgroundColor: theme.colors.background.white,
    margin: '0px 0px 12px 0px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',

    display: 'grid',
    gridTemplateColumns: '1fr',
    userSelect: 'none',
    '& > :first-child': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  toggleArrow: { transform: 'rotate(180deg)', transition: 'all .5s' },
  categoryContainer: {
    cursor: 'pointer',
  },
  border: {
    position: 'absolute',
    width: '0.4rem',
    height: '3rem',
    backgroundColor: theme.colors.primary.dark,
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
    /* border-left: ${({ theme }: { theme: Theme }) =>
      `1px solid ${theme.colors.primary.dark}`}; */
  },
  titleBorderContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    position: 'relative',
  },
  title: {
    fontWeight: 500,
    fontSize: '1.8rem',
    /* line-height: 21px; */
    /* identical to box height */
    margin: '18px 0px',
    color: '#1c1c1c',
    marginLeft: theme.spacings.margin.left,
  },
  iconContainer: {
    marginRight: '16px',
    transition: 'all .5s',
  },
  primaryCategorychildrenContainer: {
    marginLeft: theme.spacings.margin.left,
    marginRight: theme.spacings.margin.left,
  },
}));

interface IMainCategoryCard {
  title: string;
  children: string | JSX.Element | JSX.Element[];
  showDropDownAndCount: boolean;
  itemsCount: number;
}

export const PrimaryCategory = ({
  title,
  children,
  showDropDownAndCount,
  itemsCount,
}: IMainCategoryCard) => {
  const classes = mainCategoryStyles();
  const [showChildrenState, setShowChildrenState] = useState<boolean>(true);

  const handleClick = () => {
    if (showDropDownAndCount) {
      setShowChildrenState((prevState: boolean) => !prevState);
    }
  };

  return (
    <div
      id={ElementIDs.primaryCategory}
      className={classes.primaryCategoryRoot}
    >
      <div className={classes.categoryContainer} onClick={handleClick}>
        <div
          className={classes.titleBorderContainer}
          id={ElementIDs.primaryCategoryTitle}
        >
          <div className={classes.border} />
          <div className={classes.title}>
            {title} {showDropDownAndCount ? `(${itemsCount})` : ''}
          </div>
        </div>
        <div
          className={`${classes.iconContainer} ${
            showChildrenState ? classes.toggleArrow : ''
          }`}
        >
          {showDropDownAndCount && <DownFilledIcon width={16} height={16} />}
        </div>
      </div>
      <div className={classes.primaryCategorychildrenContainer}>
        {showChildrenState && children}
      </div>
    </div>
  );
};
