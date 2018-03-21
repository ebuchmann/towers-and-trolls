import { action, computed, observable } from 'mobx';
import { Enemy } from './game';

class Field {
  @observable level: number = 1;
  @observable entities: Enemy[] = Array(10).fill(null);

  @computed
  get nextEnemy(): number {
    return this.entities.findIndex((ent, index) => ent && ent.hp > 0 && index < 10);
  }

  @action.bound
  addEntity(entity: Enemy): void {
    this.entities.push(entity);
  }

  @action.bound
  removeEntity(): Enemy | null {
    return this.entities.shift();
  }

  @action.bound
  moveForward(): void {
    this.level += 1;
  }

  @action.bound
  moveBackwards(): void {
    this.level -= 1;
  }
}

export default Field;
