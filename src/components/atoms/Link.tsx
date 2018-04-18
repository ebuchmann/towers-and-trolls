import * as React from 'react';
import styled from 'react-emotion';

const Link = styled('span')`
  color: chocolate;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: sandybrown;
  }
`;

export default Link;
