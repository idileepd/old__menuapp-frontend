import { AddButton } from '../AddButton/AddButton';

export const FoodItemCardImage = (props: { imageUrl?: string }) => {
  const { imageUrl } = props;

  return (
    <div
    // style={{
    //   display: 'grid',
    //   gridAutoColumns: '1fr',
    //   justifyContent: 'center',
    //   justifyItems: 'center',
    //   width: '140px',
    // }}
    >
      {
        <div
          style={{
            width: '140px',
            // height: '140px',
            overflow: 'hidden',
            margin: 'auto',
            display: 'grid',
            justifyContent: 'center',
          }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Nice Food"
              style={{
                borderRadius: '16px',
              }}
            />
          )}
          <div
            style={{ transform: `${imageUrl ? 'translateY(-50%)' : 'none'}` }}
          >
            <AddButton />
          </div>
        </div>
      }
    </div>
  );
};
