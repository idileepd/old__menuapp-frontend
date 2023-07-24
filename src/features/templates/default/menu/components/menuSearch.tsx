import { useDispatch, useSelector } from 'react-redux';

import { FilterTagChipsContainer } from '../../components/FilterTagChip/FilterTagChipsContainer';
import { Search } from '../../components/Search';

import { getMenuData, getSelectedTags } from '@/store/menu/menuSelectors';
import { setSearchString, toggleFilterTag } from '@/store/menu/menuActions';

export const MenuSearch = () => {
  const menuData = useSelector(getMenuData);
  const selectedTags = useSelector(getSelectedTags);

  const dispatch = useDispatch();

  const onClickTag = (tagId: string) => {
    toggleFilterTag(dispatch, tagId);
  };

  const onSearch = (searchString: string) => {
    setSearchString(dispatch, searchString);
  };

  if (!menuData) {
    return null;
  }

  return (
    <div style={{ width: '97%', margin: 'auto' }}>
      <Search onSearch={onSearch} />
      <FilterTagChipsContainer
        allTags={menuData.allTags}
        onSelectTag={onClickTag}
        selectedTags={selectedTags}
      />
    </div>
  );
};
