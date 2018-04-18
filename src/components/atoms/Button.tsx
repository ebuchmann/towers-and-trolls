import * as React from 'react';
import styled from 'react-emotion';

const Button = styled('button')`
  border: 1px solid chocolate;
  padding: 5px 20px;
  background: none;
  color: bisque;
  border-radius: 4px;

  &:hover {
    border-color: sandybrown;
  }

  &:focus {
    outline: none;
  }

  &:active {
    color: sandybrown;
  }
`;

export default Button;
