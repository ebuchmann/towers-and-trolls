import { action, computed, observable } from 'mobx';
import resourcesStore from './resources';

export interface WarehouseData {
  unlocked: boolean;
  level: number;
}

export class WarehouseStore {
  @observable unlocked: boolean = true;
  @observable level: number = 0;

  @computed
  get coinStorage(): number {
    if (!this.unlocked) return 0;

    return 500 * this.level;
  }

  @computed
  get lumberStorage(): number {
    if (!this.unlocked) return 0;

    return 250 * this.level;
  }

  @computed
  get foodStorage(): number {
    if (!this.unlocked) return 0;

    return 500 * this.level;
  }

  @action.bound
  gainLevel(): void {
    this.level += 1;
  }
}

export default new WarehouseStore();
