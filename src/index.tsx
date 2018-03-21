import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import App from './components/App';
import Game from './store/game';

const rootEl = document.getElementById('root');
const game = new Game();

render(
  <AppContainer>
    <Provider {...game.allStores}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl,
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;

    render(
      <AppContainer>
        <Provider {...game.allStores}>
          <NewApp />
        </Provider>
      </AppContainer>,
      rootEl,
    );
  });
}
