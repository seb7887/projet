import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

/**
 * Styles
 */

const SearchButton = styled(IconButton)`
  transition: all .3s;

  :hover {
    opacity: .5;
  }
`;

const Search = styled(Icon)`
  color: #f1f2f1;
  font-size: 2.8rem !important;
`;

/**
 * Component
 */

class SearchIcon extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <SearchButton aria-label="Search">
        <Search>search</Search>
      </SearchButton>
    );
  }
}

export default SearchIcon;
