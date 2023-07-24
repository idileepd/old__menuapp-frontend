import { createUseStyles } from 'react-jss';

import { Theme } from '@/types/Theme';

export const foodCardStyles = createUseStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.colors.background.white,
    margin: '0px 0px',
    paddingBottom: '16px',
    marginBottom: '16px',
    /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05); */
  },
}));
