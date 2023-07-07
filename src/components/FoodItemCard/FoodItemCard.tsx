import { createUseStyles } from 'react-jss';

import { FoodTypeAndAttributes } from '../FoodTypesAndAttributes/FoodTypesAndAttributes';
import { FoodTypeComponent } from '../FoodTypeComponent/FoodTypeComponent';

import { FoodItemCardImage } from './FoodItemCardImage';

import { Theme } from '@/types/Theme';
import { RestaurantFoodItem } from '@/types/restaurantTypes';

export const foodItemCardStyles = createUseStyles((theme: Theme) => ({
  foodItemCard: {
    backgroundColor: theme.colors.background.white,
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '16px',
    alignItems: 'start',
    marginTop: '14px',
    // marginBottom: '10px',
  },
  title: {
    color: '#292524',
    fontSize: '1.6rem',
    fontWeight: 500,
    letterSpacing: '-0.512px',
  },
  attributes: {
    display: 'flex',
    gap: '4px',
    margin: '0px 0px 8px 0px',
    alignItems: 'center',
  },
  price: {
    color: '#212529',
    fontSize: '1.2rem',
    fontWeight: 400,
    letterSpacing: '-0.275px',
    marginTop: '10px',
  },
  description: {
    color: '#6A6F81',
    fontSize: '1.2rem',
    fontWeight: 400,
    letterSpacing: '0.11px',
    marginTop: '10px',
    maxWidth: '450px',
    lineHeight: '1.15',
  },
}));

export const FoodItemCard = (props: {
  foodItem: RestaurantFoodItem;
  priceSymbol: string;
  showBottomBorder: boolean;
}) => {
  const classes = foodItemCardStyles();
  const { foodItem, priceSymbol, showBottomBorder } = props;
  const { foodAttributes, foodType, imageUrl, price, foodDescription, name } =
    foodItem;

  return (
    <div
      className={classes.foodItemCard}
      style={{
        borderBottom: `${showBottomBorder ? '1px dashed lightgray' : 'none'}`,
        paddingBottom: '16px',
      }}
    >
      <div>
        <div className={classes.attributes}>
          <FoodTypeComponent foodType={foodType} />
          <FoodTypeAndAttributes foodAttributes={foodAttributes} />
        </div>
        <div className={classes.title}>{name}</div>

        <div className={classes.price}>{`${priceSymbol} ${Number(
          price
        ).toLocaleString()}`}</div>

        <div className={classes.description}>{foodDescription} </div>
      </div>
      <div>
        <FoodItemCardImage imageUrl={imageUrl} />
      </div>
    </div>
  );
};
