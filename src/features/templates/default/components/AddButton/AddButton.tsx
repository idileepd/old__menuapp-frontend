import { createUseStyles } from 'react-jss';

import { Theme } from '@/types/Theme';

const addButtonStyles = createUseStyles((theme: Theme) => ({
  addButtonRoot: {
    border: `1px solid ${theme.colors.primary.main}`,
    padding: '8px 32px',
    width: 'max-content',
    margin: 'auto',
    color: theme.colors.primary.main,
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: theme.colors.primary.light,
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '0.18px',
    textTransform: 'uppercase',
  },
}));

export const AddButton = () => {
  const classes = addButtonStyles();

  return <div className={classes.addButtonRoot}>Add +</div>;
};
