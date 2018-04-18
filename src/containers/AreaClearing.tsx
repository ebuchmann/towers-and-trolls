import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ui, { UiStore } from '../store/ui';
import Link from '../components/atoms/Link';

export interface AreaClearingProps {
  ui?: UiStore;
}

@inject('ui')
@observer
class AreaClearing extends React.Component<AreaClearingProps, undefined> {
  render() {
    const { move } = this.props.ui;

    return (
      <div>
        <b>Clearing</b>
        <br />
        Obvious exits: [<Link onClick={() => move('beach')}>beach</Link>] [<Link
          onClick={() => move('orchard')}
        >
          orchard
        </Link>]
        <p>
          You are in a clearing surrounded by trees. There is a giant pool here... because that was
          all I could think of putting to make this line of text longer.
        </p>
        <p>
          A man with an axe is here. [<Link>Talk</Link>]
        </p>
      </div>
    );
  }
}

export default AreaClearing;
