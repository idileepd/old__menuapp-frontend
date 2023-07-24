import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultMenuPage } from '../templates/default/menu';

import {
  getBusinessData,
  getBusinessError,
  getBusinessLoading,
} from '@/store/business/businessSelectors';
import { fetchBusiness } from '@/store/business/businessActions';

export const BusinessMainPage = () => {
  const businessData = useSelector(getBusinessData);
  const isLoading = useSelector(getBusinessLoading);
  const { isError } = useSelector(getBusinessError);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBusiness(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  if (isError) {
    return <div> Error Loading ... </div>;
  }

  if (!businessData) {
    return <div>Business Data Error</div>;
  }

  // Default FOOD Type
  // if (businessData.type==="SERVICE") etc... will go here
  return <DefaultMenuPage businessData={businessData} />;
};
