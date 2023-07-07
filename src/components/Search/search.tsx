import { useState } from 'react';

import { CloseIcon, SearchIcon } from '../icons';

import { searchStyles } from './styles';

export const Search = () => {
  const classes = searchStyles();
  const [showClose, setShowClose] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  //   const inputRef = useRef<HTMLElement | null>(null);

  const executeScroll = () => {
    // inputRef?.current?.scrollIntoView({
    //   behavior: 'instant',
    //   block: 'center',
    //   inline: 'end',
    // });
    // scrollToTargetAdjusted();
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredText = e.target.value;
    setSearchTerm(enteredText);
    if (enteredText === '') {
      setShowClose(false);
    } else {
      setShowClose(true);
    }
  };
  const clearText = () => {
    setSearchTerm('');
    setShowClose(false);
  };

  return (
    <div
      className={classes.box}
      onClick={() => {
        executeScroll();
      }}
    >
      <div className={classes.leftIcon}>
        <SearchIcon width={20} height={20} strokeWidth={2.5} />
      </div>
      <input
        className={classes.input}
        placeholder="Search dishes"
        onChange={handleClick}
        value={searchTerm}
        // ref={inputRef}
      />
      <div className={classes.rightIcon}>
        {showClose && (
          <CloseIcon
            onClick={clearText}
            cursor="pointer"
            width={20}
            height={20}
            strokeWidth={2}
          />
        )}
      </div>
    </div>
  );
};
