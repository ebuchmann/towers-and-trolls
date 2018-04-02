import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { css } from 'react-emotion';

export interface TopNavProps {}

@observer
class TopNav extends React.Component<TopNavProps, any> {
  render() {
    return <header className={classes}>?</header>;
  }
}

const classes = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid black;
  background-color: black;
  color: white;
`;

export default TopNav;
