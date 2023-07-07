import { createUseStyles } from 'react-jss';

const appContainerStyles = createUseStyles({
  root: {
    maxWidth: '820px',
    /* display: flex;
    align-items: center;
    justify-content: center; */
    margin: '0px auto',
  },
});

type IProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const AppContainer = ({ children }: IProps) => {
  const classes = appContainerStyles();

  return <div className={classes.root}>{children}</div>;
};
