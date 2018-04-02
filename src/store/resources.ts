import { action, computed, observable } from 'mobx';
import warehouseStore from './warehouse';
import warehouse from './warehouse';
import lumberjackStore from './lumberjack';
import farmerStore from './farmer';
import farmer from './farmer';

export interface ResourcesData {
  coins: number;
  lumber: number;
}

export enum resourceTypes {
  FOOD = 'food',
  LUMBER = 'lumber',
  COINS = 'coins',
}

export class ResourcesStore {
  // Food
  @observable food: number = 0;
  @observable foodLifetime: number = 0;

  @computed
  get foodMax(): number {
    return warehouseStore.foodStorage + 100;
  }

  @computed
  get foodPerTick(): number {
    return farmerStore.perTick * 1.25;
  }

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
  removeResource(type: string, value: number): boolean {
    if (this[type] >= value) {
      this[type] -= value;
      return true;
    }

    return false;
  }

  @action.bound
  hasResources(values: Array<[string, number]>): boolean {
    return values.every(value => this[value[0]] >= value[1]);
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
