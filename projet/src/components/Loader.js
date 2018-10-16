import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


/**
 * Styles
 */

const LoaderDiv = styled(CircularProgress)`
  color: #dad2da !important;
  width: 5rem !important;
  height: 5rem !important;
  margin: auto;
`;

/**
 * Component
 */

const Loader = () => {
  return (
    <LoaderDiv />
  );
}

export default Loader;