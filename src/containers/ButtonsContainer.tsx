import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ButtonPerson from '../components/ButtonPerson';
import { ResourcesStore } from '../store/resources';
import { WarehouseStore } from '../store/warehouse';
import { LumberjackStore } from '../store/lumberjack';
import { FarmerStore } from '../store/farmer';

export interface CurrenciesContainerProps {
  currencies?: ResourcesStore;
  warehouse?: WarehouseStore;
  lumberjack?: LumberjackStore;
  farmer?: FarmerStore;
}

@inject('currencies', 'warehouse', 'lumberjack', 'farmer')
@observer
class ButtonsContainer extends React.Component<CurrenciesContainerProps, undefined> {
  render() {
    return (
      <div>
        <ButtonPerson person={this.props.lumberjack} />
        <ButtonPerson person={this.props.farmer} />
        <div onClick={this.props.warehouse.gainLevel}>Warehouse - {this.props.warehouse.level}</div>
      </div>
    );
  }
}

export default ButtonsContainer;
