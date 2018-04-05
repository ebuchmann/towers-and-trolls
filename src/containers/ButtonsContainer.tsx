import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ButtonPerson from '../components/ButtonPerson';
import { ResourcesStore } from '../store/resources';
import { WarehouseStore } from '../store/warehouse';
import { LumberjackStore } from '../store/lumberjack';
import { FarmerStore } from '../store/farmer';
import { ScoutStore } from '../store/scout';
import Button from '../components/atoms/Button';
import Divider from '../components/atoms/Divider';

export interface CurrenciesContainerProps {
  currencies?: ResourcesStore;
  warehouse?: WarehouseStore;
  lumberjack?: LumberjackStore;
  farmer?: FarmerStore;
  scout?: ScoutStore;
}

@inject('currencies', 'warehouse', 'lumberjack', 'farmer', 'scout')
@observer
class ButtonsContainer extends React.Component<CurrenciesContainerProps, undefined> {
  render() {
    return (
      <div>
        <Divider>Residents</Divider>
        <ButtonPerson person={this.props.lumberjack} />
        <ButtonPerson person={this.props.farmer} />
        <ButtonPerson person={this.props.scout} />

        <Divider>Buildings</Divider>
        <Button onClick={this.props.warehouse.gainLevel}>
          Warehouse - {this.props.warehouse.level}
        </Button>
      </div>
    );
  }
}

export default ButtonsContainer;
