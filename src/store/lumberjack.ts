import { action, computed, observable } from 'mobx';
import resourceStore, { resourceTypes } from './resources';

export class LumberjackStore {
  name: string = 'Lumberjack';
  @observable unlocked: boolean = true;
  @observable level: number = 1;

  // Calculations
  baseCost: number = 50;
  growth: number = 1.35;

  @computed
  get perTick(): number {
    return this.level * 0.02;
  }

  @computed
  get effects(): any {
    return [['lumber', this.level * 0.02]];
  }

  @computed
  get cost(): number {
    if (this.level === 1) return this.baseCost;

    return Math.floor(this.baseCost * Math.pow(this.growth, this.level));
  }

  @action.bound
  gainLevel(): void {
    if (resourceStore.removeResources([[resourceTypes.FOOD, this.cost]])) this.level += 1;
  }
}

export default new LumberjackStore();
