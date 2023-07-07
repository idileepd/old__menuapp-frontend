import { createUseStyles } from 'react-jss';

import { DownIcon, TimeIcon } from '../icons';

import { Theme } from '@/types/Theme';

export const timeLocationChipStyles = createUseStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5px',
    userSelect: 'none',
    cursor: 'pointer',
  },
  timeLocationChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    padding: '5px 10px',
    width: 'max-content',
    backgroundColor: theme.colors.background.paper,
    border: ' 1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '50px',
  },
  chipText: {
    fontWeight: 400,
    fontSize: '1.1rem',
    lineHeight: '12px',
  },
  stick: {
    borderRight: '1px solid #ced4da',
    paddingTop: '15px',
  },
}));

export const TimeLocationChip = () => {
  const classes = timeLocationChipStyles();

  return (
    <div className={classes.root}>
      <div className={classes.timeLocationChip}>
        <TimeIcon width={12} height={12} />{' '}
        <div className={classes.chipText}>Closes At 10:30pm</div>
        <div className={classes.stick} />
        <div className={classes.chipText}>Kondapur</div>
        <DownIcon width={12} height={12} cursor="pointer" />
      </div>
    </div>
  );
};
