import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'react-emotion';

export interface ButtonPersonProps {
  person: {
    name: string;
    level: number;
    cost: number | Array<[string, number]>;
    gainLevel(): void;
  };
}

@observer
class ButtonPerson extends React.Component<ButtonPersonProps, undefined> {
  render() {
    const { name, level, cost, gainLevel } = this.props.person;
    return (
      <Button onClick={gainLevel}>
        {name} ({level}) -- {cost}
      </Button>
    );
  }
}

const Button = styled('button')`
  border: 1px solid chocolate;
  padding: 5px 20px;
  background: none;
  color: bisque;
  border-radius: 4px;

  &:hover {
    border-color: sandybrown;
  }
`;

export default ButtonPerson;
