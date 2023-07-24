import { DotNames } from '../../components/DotNames/DotNames';
import { TimeLocationChip } from '../../components/TimeLocationChip';
import { InfoIcon } from '../../components/icons';

import { menuHeaderStyles } from './styles/menuHeaderStyles';

import { Business } from '@/types';

export const MenuHeader = ({ businessData }: { businessData: Business }) => {
  const classes = menuHeaderStyles();
  const { logoImageUrl, name, specialties } = businessData;

  return (
    <div className={classes.root}>
      <div className={classes.iconSpaced}>
        <InfoIcon width={24} height={24} />
      </div>
      <div className={classes.companyInfo}>
        <div className={classes.logoPlaceHolder}>
          <img src={logoImageUrl} alt="logo" width="100%" />
        </div>
        <div className={classes.infoBox}>
          <div className={classes.companyTitle}>{name}</div>
          <DotNames names={specialties} />
        </div>
      </div>
      <TimeLocationChip />
    </div>
  );
};
