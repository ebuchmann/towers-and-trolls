import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UiStore } from '../store/ui';

export interface AreaBeachProps {
  ui?: UiStore;
}

@inject('ui', 'resources')
@observer
class AreaContainer extends React.Component<AreaBeachProps> {
  render() {
    const { toggleTab } = this.props.ui;

    return (
      <div>
        <span onClick={() => toggleTab('area')}>Area</span> /
        <span onClick={() => toggleTab('buttons')}>Buttons</span>
      </div>
    );
  }
}

export default AreaContainer;
