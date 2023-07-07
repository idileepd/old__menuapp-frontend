import logo from '../../../assets/company-logo.png';

import { menuHeaderStyles } from './styles';

import { DotNames } from '@/components/DotNames/DotNames';
import { InfoIcon } from '@/components/icons';
import { TimeLocationChip } from '@/components/TimeLocationChip';

export const MenuHeader = () => {
  const companyTitle = 'Olio - The Wood Fried Pizzeria';

  const classes = menuHeaderStyles();

  return (
    <div className={classes.root}>
      <div className={classes.iconSpaced}>
        <InfoIcon width={24} height={24} />
      </div>
      <div className={classes.conpanyInfo}>
        <div className={classes.logoPlaceHolder}>
          <img src={logo} alt="logo" width="100%" />
        </div>
        <div className={classes.infoBox}>
          <div className={classes.companyTitle}>{companyTitle}</div>
          <DotNames names={['Pizza', 'Fast Food', 'Italian']} />
        </div>
      </div>
      <TimeLocationChip />
    </div>
  );
};
