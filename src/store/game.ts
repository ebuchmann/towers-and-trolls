import resourcesStore from './resources';
import warehouseStore from './warehouse';
import lumberjackStore from './lumberjack';
import scoutStore from './scout';
import farmerStore from './farmer';
import { action, observable } from 'mobx';

class Game {
  constructor() {
    setInterval(this.loop, 1000);
  }

  @action
  loop = () => {
    resourcesStore.addResources([
      ['lumber', resourcesStore.lumberPerTick],
      ['food', resourcesStore.foodPerTick],
    ]);
  };

  get allStores() {
    return {
      currencies: resourcesStore,
      warehouse: warehouseStore,
      lumberjack: lumberjackStore,
      farmer: farmerStore,
      scout: scoutStore,
    };
  }
}

export default Game;
