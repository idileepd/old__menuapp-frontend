import { createUseStyles } from 'react-jss';

import { Theme } from '@/types/Theme';
import { getFoodAttributeColor } from '@/utils';

function capitalize(word: string) {
  let str = '';
  word.split('_').forEach((item) => {
    const w = item.toLocaleLowerCase();
    str += w[0].toUpperCase() + w.slice(1).toLowerCase();
  });

  return str;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const foodAttributeStyles = createUseStyles((_: Theme) => ({
  foodAttributes: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  title: {},
  attributeChip: {
    padding: '4px',
    borderRadius: '4px',
    color: '#FFF',
    fontSize: '.9rem',
    fontWeight: 400,
    letterSpacing: '-0.16px',
  },
}));

export const FoodTypeAndAttributes = (props: { foodAttributes: string[] }) => {
  const classes = foodAttributeStyles();
  const { foodAttributes } = props;

  return (
    <div className={classes.foodAttributes}>
      {foodAttributes.map((attributeName) => {
        return (
          <div
            key={attributeName}
            className={classes.attributeChip}
            style={{
              backgroundColor: getFoodAttributeColor(attributeName),
            }}
          >
            {capitalize(attributeName)}
          </div>
        );
      })}
    </div>
  );
};
