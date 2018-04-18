import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import { WarehouseStore, ResourcesStore } from '../store';
import { noWarehouse, basicWarehouse } from '../assets/ascii/warehouse';
import { Popup } from 'semantic-ui-react';

export interface TowerProps {
  warehouse?: WarehouseStore;
  resources?: ResourcesStore;
}

@inject('resources', 'warehouse')
@observer
class Warehouse extends React.Component<TowerProps, undefined> {
  trigger() {
    const { unlocked } = this.props.warehouse;

    return <div>{unlocked ? basicWarehouse : noWarehouse}</div>;
  }

  content() {
    const { unlocked } = this.props.warehouse;

    if (!unlocked) {
      return <div>Noo!! {this.props.resources.coins}</div>;
    }

    return (
      <div>
        <h1>Wow</h1>
        <p>You can upgrade this</p>
        <button>do it!</button>
      </div>
    );
  }

  render() {
    return (
      <WarehouseContainer>
        <Popup on="click" content={this.content()} trigger={this.trigger()} />
      </WarehouseContainer>
    );
  }
}

const WarehouseContainer = styled('div')`
  position: absolute;
`;

export default Warehouse;
