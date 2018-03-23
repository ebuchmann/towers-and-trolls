import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Currencies } from '../store/currencies';

export interface CurrenciesContainerProps {
  currencies?: Currencies;
}

@inject('currencies')
@observer
class CurrenciesContainer extends React.Component<CurrenciesContainerProps, undefined> {
  render() {
    const { coins, coinsMax } = this.props.currencies;

    return (
      <div>
        Coins: {coins} / {coinsMax}
      </div>
    );
  }
}

export default CurrenciesContainer;
