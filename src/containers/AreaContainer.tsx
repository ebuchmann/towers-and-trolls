import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UiStore } from '../store/ui';
import AreaBeach from './AreaBeach';
import AreaClearing from './AreaClearing';
import AreaOrchard from './AreaOrchard';

export interface AreaBeachProps {
  ui?: UiStore;
}

@inject('ui', 'resources')
@observer
class AreaContainer extends React.Component<AreaBeachProps> {
  render() {
    const { currentArea } = this.props.ui;

    return (
      <div>
        {currentArea === 'beach' && <AreaBeach />}
        {currentArea === 'clearing' && <AreaClearing />}
        {currentArea === 'orchard' && <AreaOrchard />}
      </div>
    );
  }
}

export default AreaContainer;
