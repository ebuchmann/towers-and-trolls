import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ButtonPerson from '../components/ButtonPerson';
import { ResourcesStore } from '../store/resources';
import { WarehouseStore } from '../store/warehouse';
import { LumberjackStore } from '../store/lumberjack';
import { FarmerStore } from '../store/farmer';
import { ScoutStore } from '../store/scout';
import { BeaconStore } from '../store/beacon';
import { Researcher } from '../store/people/Researcher';
import Button from '../components/atoms/Button';
import Divider from '../components/atoms/Divider';

export interface ButtonsContainerProps {
  resources?: ResourcesStore;
  warehouse?: WarehouseStore;
  lumberjack?: LumberjackStore;
  farmer?: FarmerStore;
  scout?: ScoutStore;
  beacon?: BeaconStore;
  researcher?: Researcher;
}

@inject('resources', 'warehouse', 'lumberjack', 'farmer', 'scout', 'beacon', 'researcher')
@observer
class ButtonsContainer extends React.Component<ButtonsContainerProps, undefined> {
  render() {
    const { lumberjack, farmer, scout, researcher } = this.props;

    return (
      <div>
        <Divider>Residents</Divider>
        <ButtonPerson person={lumberjack} />
        <ButtonPerson person={farmer} />
        <ButtonPerson person={scout} />
        <ButtonPerson person={researcher} />

        <Divider>Buildings</Divider>
        <Button onClick={this.props.warehouse.gainLevel}>
          Warehouse - {this.props.warehouse.level}
        </Button>
        <Button onClick={this.props.beacon.gainLevel}>Beacon - {this.props.beacon.level}</Button>
      </div>
    );
  }
}

export default ButtonsContainer;
