import * as React from 'react';
import { inject, observer } from 'mobx-react';
import './../assets/scss/App.scss';
import DevTools from 'mobx-react-devtools';
import TopNav from './TopNav';
import Field from './Field';
import Tower from './Tower';

export interface AppProps {}

@observer
class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <div className="app">
        <TopNav />
        <DevTools />
        <Tower />
        <Field />
      </div>
    );
  }
}

export default App;
