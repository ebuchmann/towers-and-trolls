import { action, computed, observable } from 'mobx';
import currenciesStore from './currencies';

export interface WarehouseData {
  unlocked: boolean;
  level: number;
}

export class WarehouseStore {
  @observable unlocked: boolean = false;
  @observable level: number = 1;

  @computed
  get coinStorage(): number {
    if (!this.unlocked) return 0;

    return 500 * this.level;
  }

  @action.bound
  unlockWarehouse(): void {
    if (currenciesStore.coins >= 5) {
      currenciesStore.removeCoins(5);
      this.unlocked = true;
    }
  }
}

export default new WarehouseStore();
