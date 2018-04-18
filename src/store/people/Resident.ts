import { action, computed, observable } from 'mobx';
import resourceStore from '../resources';

export class Resident {
  name: string = 'Resident';
  @observable unlocked: boolean = false;
  @observable level: number = 0;

  // Calculations
  baseCost: number = 5;
  growth: number = 1.75;

  @computed
  get effects(): any {
    return [['food', this.level * 2.15]];
  }

  @computed
  get cost(): Array<[string, number]> {
    if (this.level === 1) return [['food', this.baseCost]];

    return [
      ['food', Math.floor(this.baseCost * Math.pow(this.growth, this.level))],
      ['lumber', 1 * 1.0],
    ];
  }

  @action.bound
  gainLevel(): void {
    if (resourceStore.hasResources(this.cost)) {
      resourceStore.removeResources(this.cost);
      this.level += 1;
    }
  }
}

export default Resident;
