import * as React from 'react';
import { inject, observer } from 'mobx-react';
import './../assets/scss/App.scss';
import styled from 'react-emotion';
import DevTools from 'mobx-react-devtools';
import TopNav from './TopNav';
import Field from './Field';
import Tower from './Tower';
import CurrenciesContainer from '../containers/CurrenciesContainer';

export interface AppProps {}

@observer
class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <AppContainer>
        <TopNav />
        <DevTools />
        <Tower />
        <Field />
        <CurrenciesContainer />
      </AppContainer>
    );
  }
}

const AppContainer = styled('section')`
  margin: 30px auto 0;
  max-width: 800px;
`;

export default App;
