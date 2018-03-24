import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Currencies } from '../store/currencies';
import { WarehouseStore } from '../store/warehouse';

export interface CurrenciesContainerProps {
  currencies?: Currencies;
  warehouse?: WarehouseStore;
}

@inject('currencies', 'warehouse')
@observer
class CurrenciesContainer extends React.Component<CurrenciesContainerProps, undefined> {
  render() {
    const { coins, coinsMax } = this.props.currencies;

    return (
      <div onClick={() => this.props.warehouse.unlockWarehouse()}>
        Coins: {coins} / {coinsMax}
      </div>
    );
  }
}

export default CurrenciesContainer;
