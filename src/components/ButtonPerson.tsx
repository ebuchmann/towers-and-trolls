import * as React from 'react';
import { observer } from 'mobx-react';
import { Popup } from 'semantic-ui-react';
import Button from './atoms/Button';

export interface ButtonPersonProps {
  person: {
    name: string;
    level: number;
    cost: Array<[string, number]>;
    effects: Array<[string, number]>;
    gainLevel(): void;
  };
}

@observer
class ButtonPerson extends React.Component<ButtonPersonProps, undefined> {
  getTrigger() {
    const { name, level, gainLevel } = this.props.person;

    return (
      <Button onClick={gainLevel}>
        {name} ({level})
      </Button>
    );
  }

  getContent() {
    const { name, effects, cost } = this.props.person;

    let text = '';
    for (const [type, value] of cost) {
      text += `${type}: ${value}\n`;
    }

    let effect = '';
    for (const [type, value] of effects) {
      effect += `${type}: ${value}\n`;
    }

    return (
      <div>
        {name}
        <br />
        {text}
        <br />
        {effect}
        <br />
        Provides good resources
      </div>
    );
  }

  render() {
    return <Popup trigger={this.getTrigger()} content={this.getContent()} />;
  }
}

export default ButtonPerson;
