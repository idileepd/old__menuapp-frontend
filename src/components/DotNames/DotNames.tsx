import { createUseStyles } from 'react-jss';

interface IDotNames {
  names: string[];
}

const dotNamesStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3px',
    marginTop: '8px',
  },
  dot: {
    width: '2px',
    height: '2px',
    background: '#aeaeae',
    borderRadius: '50%',
  },
  name: {
    fontWeight: '400',
    fontSize: '1.1rem',
    /* line-height: 1.5; */
    letterSpacing: '0.035em',
    color: '#6a6f81',
  },
});

const getKey = (index: number, name: string) => {
  return `${index}--${name}`;
};

export const DotNames = ({ names }: IDotNames) => {
  const classes = dotNamesStyles();

  return (
    <div className={classes.root}>
      {names.map((name, index) => {
        if (index === 0) {
          return (
            <div key={getKey(index, name)} className={classes.name}>
              {name}
            </div>
          );
        }

        return (
          <div
            key={getKey(index, name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <div className={classes.dot} />
            <div className={classes.name}>{name}</div>
          </div>
        );
      })}
    </div>
  );
};
