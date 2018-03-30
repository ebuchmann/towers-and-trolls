import { action, computed, observable } from 'mobx';
import warehouseStore from './warehouse';
import warehouse from './warehouse';
import lumberjackStore from './lumberjack';

export interface ResourcesData {
  coins: number;
  lumber: number;
}

export class ResourcesStore {
  // Lumber
  @observable lumber: number = 0;
  @observable lumberLifetime: number = 0;

  @computed
  get lumberMax(): number {
    return warehouseStore.lumberStorage + 250;
  }

  @computed
  get lumberPerTick(): number {
    return lumberjackStore.perTick + lumberjackStore.perTick * 0.25;
  }

  // Coins
  @observable coins: number = 0;
  @observable coinsLifetime: number = 0;

  @computed
  get coinsMax(): number {
    return warehouseStore.coinStorage + 500;
  }

  // Helper methods
  @action.bound
  addCurrency(type: string, value: number): void {
    this[type] = Math.min(this[type] + value, this[`${type}Max`]);
  }

  @action.bound
  removeCurrency(type: string, value: number): void {
    this[type] -= value;
  }

  // Saving...
  save(): ResourcesData {
    return {
      coins: this.coins,
      lumber: this.lumber,
    };
  }

  load({ coins }: ResourcesData) {
    this.addCurrency('coins', coins);
  }
}

export default new ResourcesStore();
