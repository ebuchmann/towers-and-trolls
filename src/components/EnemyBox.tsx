import * as React from 'react';
import { observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import { Enemy } from '../store/game';
import { enemyBox } from '../assets/ascii/enemies';

export interface EnemyProps {
  enemy: Enemy;
}

export interface EnemyState {
  color: string;
}

@observer
class EnemyBox extends React.Component<EnemyProps, EnemyState> {
  // Use this to add in a death animation or something
  componentWillUpdate(nextProps) {
    if (nextProps.enemy.hp === 0) {
    }
  }

  percent(numerator: number, denominator: number): number {
    return Math.round(numerator / denominator * 100);
  }

  render() {
    if (!this.props.enemy) return <code>&nbsp;&nbsp;&nbsp;&nbsp;</code>;

    const { hp, maxHp } = this.props.enemy;

    return (
      <EnemyDiv className={hp === 0 ? 'dead' : 'alive'}>
        <pre>{enemyBox}</pre>
        <span className="inner">
          <div className="bar" style={{ height: `${this.percent(hp, maxHp)}%` }} />
        </span>
      </EnemyDiv>
    );
  }
}

const EnemyDiv = styled('div')`
  width: 22px;
  display: inline-block;
  position: relative;
  transition: 1s all ease-out;

  &.alive {
    color: green;
  }

  &.dead {
    color: red;
    opacity: 0;
  }

  .inner {
    width: 13px;
    height: 59px;
    position: absolute;
    top: 22px;
    left: 4px;
  }

  .bar {
    background-color: tomato;
    bottom: 0;
    width: 100%;
    position: absolute;
  }
`;

export default EnemyBox;
