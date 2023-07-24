import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MenuHeader } from './components/menuHeader';
import { MenuBody } from './components/menuBody';
import { MenuSearch } from './components/menuSearch';
import { MenuFooter } from './components/menuFooter';

import { AppContainer } from '@/components/AppContainer';
import { Business } from '@/types';
import { fetchMenu } from '@/store/menu/menuActions';
import { getMenuError, getMenuLoading } from '@/store/menu/menuSelectors';

interface IMenuPageProps {
  businessData: Business;
}

export const DefaultMenuPage = (props: IMenuPageProps) => {
  const { businessData } = props;

  const isLoading = useSelector(getMenuLoading);
  const { isError } = useSelector(getMenuError);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMenu(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <div> Loading Menu ... </div>;
  }

  if (isError) {
    return <div> Error Loading ... </div>;
  }

  return (
    <AppContainer>
      <MenuHeader businessData={businessData} />
      <MenuSearch />
      <MenuBody />
      <MenuFooter />
    </AppContainer>
  );
};
