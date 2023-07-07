import { createUseStyles } from 'react-jss';

import { Theme } from '@/types/Theme';

export const searchStyles = createUseStyles((theme: Theme) => ({
  box: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    // width: '97%',
    margin: 'auto',
    height: '4.0rem',
    // border: `2px solid lightgray`,
    backgroundColor: theme.colors.background.white,
    borderRadius: '13px',
    // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    // box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    // box-shadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",

    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  },
  input: {
    fontSize: '1.5rem',
    border: 'none',
    backgroundColor: theme.colors.background.white,
    color: 'inherit',
    fontFamily: 'inherit',
    padding: '.8rem 0rem',
    width: '100%',
    '&:focus': {
      outline: 'none',
    },
  },

  leftIcon: {
    // position: 'absolute',
    // transform: 'translateX(2rem)',
    padding: '0rem 1rem',
    width: '48px',
    // height: '24px',
  },
  rightIcon: {
    padding: '0rem 1rem',
    width: '48px',
    // height: '24px',
  },
}));
