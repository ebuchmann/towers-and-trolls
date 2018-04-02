import resourcesStore from './resources';
import warehouseStore from './warehouse';
import lumberjackStore from './lumberjack';
import farmerStore from './farmer';
import { action, observable } from 'mobx';

class Game {
  constructor() {
    setInterval(this.loop, 1000);
  }

  @action
  loop = () => {
    resourcesStore.addCurrency('lumber', resourcesStore.lumberPerTick);
    resourcesStore.addCurrency('food', resourcesStore.foodPerTick);
  };

  get allStores() {
    return {
      currencies: resourcesStore,
      warehouse: warehouseStore,
      lumberjack: lumberjackStore,
      farmer: farmerStore,
    };
  }
}

export default Game;
