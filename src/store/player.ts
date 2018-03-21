import { action, computed, observable } from 'mobx';

class PlayerModel {
  @observable exp: number = 0;

  @action.bound
  spend(exp: number): void {
    this.exp -= exp;
  }
}

export default PlayerModel;
