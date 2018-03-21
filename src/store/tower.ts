import { action, computed, observable } from 'mobx';

class Tower {
  @observable level: number = 1;

  @computed
  get damage(): number {
    return Math.floor(Math.random() * this.level * 20) + 10;
  }

  @computed
  get nextExp(): number {
    return this.level * 1;
  }

  @action.bound
  gainLevel(): void {
    this.level += 1;
  }
}

export default Tower;
