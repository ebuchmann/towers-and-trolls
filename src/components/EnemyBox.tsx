import * as React from 'react';
import { observer } from 'mobx-react';
import styled, { css } from 'react-emotion';
import { Enemy } from '../store/game';

export interface EnemyProps {
  enemy: Enemy;
}

@observer
class EnemyBox extends React.Component<EnemyProps, undefined> {
  percent(numerator: number, denominator: number): number {
    return Math.round(numerator / denominator * 100);
  }

  render() {
    if (!this.props.enemy) return <code>&nbsp;&nbsp;&nbsp;&nbsp;</code>;

    const { hp, maxHp } = this.props.enemy;

    return (
      <div style={{ width: '22px', display: 'inline-block', position: 'relative' }}>
        <pre>
          {`+-+
| |
| |
| |
+-+`}
        </pre>
        <span
          style={{
            width: '13px',
            height: '59px',
            position: 'absolute',
            top: '22px',
            left: '4px',
          }}
        >
          <div
            style={{
              background: 'tomato',
              height: `${this.percent(hp, maxHp)}%`,
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }}
          />
        </span>
      </div>
    );
  }
}

export default EnemyBox;
