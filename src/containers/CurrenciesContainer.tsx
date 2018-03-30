import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ResourcesStore } from '../store/currencies';
import { WarehouseStore } from '../store/warehouse';

export interface CurrenciesContainerProps {
  currencies?: ResourcesStore;
  warehouse?: WarehouseStore;
}

@inject('currencies', 'warehouse')
@observer
class CurrenciesContainer extends React.Component<CurrenciesContainerProps, undefined> {
  render() {
    const { coins, coinsMax, lumber, lumberMax } = this.props.currencies;

    return (
      <div onClick={() => this.props.warehouse.unlockWarehouse()}>
        <div>
          Coins: {coins.toFixed(2)} / {coinsMax}
        </div>
        <div>
          Lumber: {lumber.toFixed(2)} / {lumberMax}
        </div>
      </div>
    );
  }
}

export default CurrenciesContainer;
