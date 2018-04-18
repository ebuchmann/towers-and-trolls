import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UiStore } from '../store/ui';
import { ResourcesStore } from '../store/resources';
import { Link, Button, Description } from '../components/atoms';

export interface AreaBeachProps {
  ui?: UiStore;
  resources?: ResourcesStore;
}

@inject('ui', 'resources')
@observer
class AreaBeach extends React.Component<AreaBeachProps, undefined> {
  addLumber = () => {
    const { addResources } = this.props.resources;
    addResources([['lumber', Math.random() / 2]]);
  };

  render() {
    const { move } = this.props.ui;

    return (
      <div>
        <b>Beach</b>
        <br />
        Obvious exits: [<Link onClick={() => move('clearing')}>clearing</Link>]
        <Description>You are on a beach.</Description>
        <p>
          Some lumber from a shipwreak is here [<Link onClick={this.addLumber}>gather</Link>]
        </p>
        <Button onClick={this.addLumber}>Gather lumber</Button>
      </div>
    );
  }
}

export default AreaBeach;
