import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ResourcesStore } from '../store/currencies';
import { WarehouseStore } from '../store/warehouse';
import { LumberjackStore } from '../store/lumberjack';

export interface CurrenciesContainerProps {
  currencies?: ResourcesStore;
  warehouse?: WarehouseStore;
  lumberjack?: LumberjackStore;
}

@inject('currencies', 'warehouse', 'lumberjack')
@observer
class ButtonsContainer extends React.Component<CurrenciesContainerProps, undefined> {
  render() {
    return (
      <div>
        <button onClick={() => this.props.lumberjack.gainLevel()}>
          Tree Harvester ({this.props.lumberjack.level})
        </button>
      </div>
    );
  }
}

export default ButtonsContainer;
