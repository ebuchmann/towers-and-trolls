import { action, computed, observable } from 'mobx';
import resourceStore, { resourceTypes } from './resources';

export class FarmerStore {
  name: string = 'Farmer';
  @observable unlocked: boolean = true;
  @observable level: number = 1;

  // Calculations
  baseCost: number = 5;
  growth: number = 1.35;

  @computed
  get perTick(): number {
    return this.level * 0.15;
  }

  @computed
  get cost(): Array<[string, number]> {
    if (this.level === 1) return [['food', this.baseCost]];

    return [
      ['food', Math.floor(this.baseCost * Math.pow(this.growth, this.level))],
      ['lumber', 5 * 1.0],
    ];
  }

  @action.bound
  gainLevel(): void {
    if (resourceStore.hasResources(this.cost)) {
      resourceStore.removeResource(resourceTypes.FOOD, this.cost[0][1]);
      this.level += 1;
    }
  }
}

export default new FarmerStore();
