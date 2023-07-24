// import { FoodItemCard } from '@/components/FoodItemCard';
// import { PrimaryCategory } from '@/components/PrimaryCategory';
// import { SecondaryCategory } from '@/components/SecondaryCategory/SecondaryCategory';
// import { businessData } from '@/constants/demoBusinessData';
// import { RestaurantSecondaryCategories } from '@/types/businessTypes';

// const renderChild = (secondaryCategories: RestaurantSecondaryCategories[]) => {
//   if (secondaryCategories.length === 1) {
//     const { items } = secondaryCategories[0];

//     return items.map((foodItem, foodIndex, itemsArr) => (
//       <FoodItemCard
//         key={foodItem.id}
//         foodItem={foodItem}
//         priceSymbol={businessData.priceSymbol}
//         showBottomBorder={itemsArr.length - 1 !== foodIndex}
//       />
//     ));
//   }

//   return secondaryCategories.map((secondaryCategory, index, arr) => (
//     <SecondaryCategory
//       key={secondaryCategory.id}
//       title={secondaryCategory.secondaryCategoryName}
//       itemsCount={secondaryCategory.items.length}
//       showBorder={index !== arr.length - 1}
//     >
//       {secondaryCategory.items.map((foodItem, foodIndex, itemsArr) => (
//         <FoodItemCard
//           key={foodItem.id}
//           foodItem={foodItem}
//           priceSymbol={businessData.priceSymbol}
//           showBottomBorder={itemsArr.length - 1 !== foodIndex}
//         />
//       ))}
//     </SecondaryCategory>
//   ));
// };

// export const MenuBody = () => {
//   return (
//     <>
//       {businessData.primaryCategories.map((primaryCategory) => (
//         <PrimaryCategory
//           key={primaryCategory.id}
//           title={primaryCategory.primaryCategoryName}
//           showDropDownAndCount={
//             primaryCategory.secondaryCategories.length === 1
//           }
//           itemsCount={primaryCategory.secondaryCategories[0]?.items?.length}
//         >
//           {renderChild(primaryCategory.secondaryCategories)}
//         </PrimaryCategory>
//       ))}
//     </>
//   );
// };
