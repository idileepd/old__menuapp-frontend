import { createUseStyles } from 'react-jss';
import { useState } from 'react';

import { DownFilledIcon } from '../icons';

import { Theme } from '@/types/Theme';

const secondaryCategoryStyles = createUseStyles((theme: Theme) => ({
  secondaryCategoryStyles: {
    backgroundColor: theme.colors.background.white,
    margin: '12px 0px',
    display: 'grid',
    gridAutoColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'start',
    userSelect: 'none',
    cursor: 'pointer',
  },
  secondaryCategoryTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '10px',
  },
  iconContainer: {
    // marginRight: '12px',
    transition: 'all .5s',
  },
  toggleArrow: { transform: 'rotate(180deg)', transition: 'all .5s' },
  title: {
    fontWeight: 500,
    fontSize: '1.4rem',
    lineHeight: '16px',
    color: '#6A6F81',
    // marginLeft: theme.spacings.margin.left,
  },
}));

interface ISecondaryCard {
  title: string;
  children: JSX.Element[];
  itemsCount: number;
  showBorder: boolean;
}

export const SecondaryCategory = ({
  title,
  itemsCount,
  children,
  showBorder,
}: ISecondaryCard) => {
  const [showItems, setShowItems] = useState(false);

  const classes = secondaryCategoryStyles();

  if (children.length === 0) {
    return null;
  }

  return (
    <div className={classes.secondaryCategoryStyles}>
      <div
        className={classes.secondaryCategoryTitleContainer}
        onClick={() => setShowItems((prevState) => !prevState)}
      >
        <div className={classes.title}>
          {title} ({itemsCount})
        </div>
        <div
          className={`${classes.iconContainer} ${
            showItems ? classes.toggleArrow : ''
          }`}
        >
          <DownFilledIcon width={16} height={16} />
        </div>
      </div>
      <div
        style={{
          marginTop: '10px',
        }}
      >
        {showItems && children}
      </div>
      {showBorder && <div style={{ borderBottom: '1px solid lightgray' }} />}
    </div>
  );
};
