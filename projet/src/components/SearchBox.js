import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {  
  return (
    <div className='search'>
      <input
        aria-label='Search'
        type='search'
        onChange={searchChange}
        className='search__text'
      />
      <span></span>
    </div>
  );
}

export default SearchBox;
