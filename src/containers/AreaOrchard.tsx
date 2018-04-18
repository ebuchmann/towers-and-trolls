import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UiStore } from '../store/ui';
import { ResourcesStore } from '../store/resources';
import { FarmerStore } from '../store/farmer';
import Link from '../components/atoms/Link';
import Button from '../components/atoms/Button';

export interface AreaOrchardProps {
  ui?: UiStore;
  resources?: ResourcesStore;
  farmer?: FarmerStore;
}

@inject('ui', 'resources', 'farmer')
@observer
class AreaBeach extends React.Component<AreaOrchardProps> {
  addFood = () => {
    const { addResources } = this.props.resources;
    addResources([['food', Math.random() / 2]]);
  };

  render() {
    const { move } = this.props.ui;
    const { unlock, unlocked } = this.props.farmer;

    return (
      <div>
        <b>Orchard</b>
        <br />
        Obvious exits: [<Link onClick={() => move('clearing')}>clearing</Link>]
        <p>
          You are in a strange orchard. A farmer is here.{' '}
          {!unlocked && <Link onClick={unlock}>Recruit?</Link>}
        </p>
        <Button onClick={this.addFood}>Gather food</Button>
      </div>
    );
  }
}

export default AreaBeach;
