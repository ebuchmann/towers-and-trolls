import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'react-emotion';
import { ResourcesStore } from '../store/resources';
import { WarehouseStore } from '../store/warehouse';

export interface ResourcesContainerProps {
  resources?: ResourcesStore;
  warehouse?: WarehouseStore;
}

@inject('resources', 'warehouse')
@observer
class ResourcesContainer extends React.Component<ResourcesContainerProps, undefined> {
  render() {
    const {
      coins,
      coinsMax,
      lumber,
      lumberMax,
      lumberPerTick,
      food,
      foodMax,
      foodPerTick,
      research,
      researchMax,
      researchPerTick,
    } = this.props.resources;

    return (
      <ResourceTable>
        <tbody>
          <tr>
            <td>Coins:</td>
            <td>{coins.toFixed(2)}</td>
            <td>{coinsMax}</td>
          </tr>
          <tr>
            <td>Lumber:</td>
            <td>{lumber.toFixed(2)}</td>
            <td>{lumberMax}</td>
            <td>(+{lumberPerTick.toFixed(2)})</td>
          </tr>
          <tr>
            <td>Food:</td>
            <td>{food.toFixed(2)}</td>
            <td>{foodMax}</td>
            <td>(+{foodPerTick.toFixed(2)})</td>
          </tr>
          <tr>
            <td>Research:</td>
            <td>{research.toFixed(2)}</td>
            <td>{researchMax}</td>
            <td>(+{researchPerTick.toFixed(2)})</td>
          </tr>
        </tbody>
      </ResourceTable>
    );
  }
}

const ResourceTable = styled('table')`
  width: 100%;
`;

export default ResourcesContainer;
