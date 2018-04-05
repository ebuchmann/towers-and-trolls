import { action, computed, observable } from 'mobx';
import resourceStore, { resourceTypes } from './resources';

export class ScoutStore {
  name: string = 'Scout';
  description: string = 'Fights the bad guys.';
  @observable unlocked: boolean = true;
  @observable level: number = 1;

  // Calculations
  baseCost: number = 15;
  growth: number = 1.75;

  @computed
  get effects(): any {
    return [['power', this.level * 2.15]];
  }

  @computed
  get cost(): Array<[string, number]> {
    if (this.level === 1) return [['food', this.baseCost]];

    return [['food', Math.floor(this.baseCost * Math.pow(this.growth, this.level))]];
  }

  @action.bound
  gainLevel(): void {
    if (resourceStore.hasResources(this.cost)) {
      resourceStore.removeResources(this.cost);
      this.level += 1;
    }
  }
}

export default new ScoutStore();
