import * as React from 'react';
import { inject, observer } from 'mobx-react';
import './../assets/scss/App.scss';
import styled from 'react-emotion';
import DevTools from 'mobx-react-devtools';
import TopNav from './TopNav';
import ResourcesContainer from '../containers/ResourcesContainer';
import ButtonsContainer from '../containers/ButtonsContainer';

export interface AppProps {}

@observer
class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <AppContainer>
        <TopNav />
        <DevTools />
        <LeftContainer>
          <ResourcesContainer />
        </LeftContainer>
        <MiddleContainer>
          <ButtonsContainer />
        </MiddleContainer>
        <RightContainer>-- stuff --</RightContainer>
      </AppContainer>
    );
  }
}

/* Styles */

const AppContainer = styled('section')`
  display: flex;
  padding: 0 1rem;
`;

const LeftContainer = styled('section')`
  flex: 1;
`;

const MiddleContainer = styled('section')`
  flex: 2;
  padding: 0 1rem;
`;

const RightContainer = styled('section')`
  flex: 1;
`;

export default App;
