import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import FieldStore from '../store/field';
import EnemyBox from './EnemyBox';

export interface FieldProps {
  field?: FieldStore;
}

@inject('field')
@observer
class Field extends React.Component<FieldProps, undefined> {
  render() {
    const { entities } = this.props.field;

    return (
      <FieldContainer>
        <div className="entities">
          {entities.map(enemy => <EnemyBox enemy={enemy} key={enemy ? enemy.id : Math.random()} />)}
        </div>
        <div className="lines">
          <span className="red">___ ___ </span>
          <span className="yellow">___ ___ ___ ___ </span>
          <span className="green">___ ___ ___ ___</span>
        </div>
      </FieldContainer>
    );
  }
}

const FieldContainer = styled('pre')`
  .entities {
  }

  .lines {
  }

  .red {
    color: tomato;
  }

  .yellow {
    color: bisque;
  }

  .green {
    color: green;
  }
`;

export default Field;
