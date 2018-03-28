import { action, computed, observable } from 'mobx';
import warehouseStore from './warehouse';
import warehouse from './warehouse';

export interface CurrenciesData {
  coins: number;
  lumber: number;
}

export class Currencies {
  // Lumber
  @observable lumber: number = 0;
  @observable lumberLifetime: number = 0;
  @computed
  get lumberMax(): number {
    return warehouseStore.lumberStorage + 250;
  }

  @action.bound
  addLumber(value: number): void {
    this.lumber = Math.min(this.lumber + value, this.lumberMax);
  }

  @action.bound
  removeLumber(value: number): void {
    this.lumber -= value;
  }

  // Coins
  @observable coins: number = 0;
  @computed
  get coinsMax(): number {
    return warehouseStore.coinStorage + 500;
  }

  @action.bound
  addCoins(value: number): void {
    this.coins = Math.min(this.coins + value, this.coinsMax);
  }

  @action.bound
  removeCoins(value: number): void {
    this.coins -= value;
  }

  save(): CurrenciesData {
    return {
      coins: this.coins,
      lumber: this.lumber,
    };
  }

  load({ coins }: CurrenciesData) {
    this.addCoins(coins);
  }
}

export default new Currencies();
