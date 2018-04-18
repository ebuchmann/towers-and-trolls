import resourcesStore from './resources';
import warehouseStore from './warehouse';
import beaconStore from './beacon';
import lumberjackStore from './lumberjack';
import scoutStore from './scout';
import farmerStore from './farmer';
import researcherStore from './people/Researcher';
import uiStore from './ui';
import messageStore from './messages';
import { action, observable } from 'mobx';
import farmer from './farmer';
import { ResourceList } from '../types/resourceList';

class Game {
  constructor() {
    this.lastTick = Date.now();
    setInterval(this.loop, 1000);
    setInterval(this.calculate, 2000);
  }

  lastTick: number = 0;

  resources: any = {
    lumber: 0,
    food: 0,
    research: 0,
  };

  @action
  loop = () => {
    const now = Date.now();
    const delta = (Date.now() - this.lastTick) / 1000;
    this.lastTick = now;

    resourcesStore.addResources([
      ['lumber', this.resources.lumber * delta],
      ['food', this.resources.food * delta],
      ['research', this.resources.research * delta],
    ]);
  };

  @action
  calculate = () => {
    const allGains: ResourceList = [
      ...farmerStore.effects,
      ...lumberjackStore.effects,
      ...scoutStore.effects,
    ];

    const resources = {
      food: 0,
      lumber: 0,
      power: 0,
      research: 0,
    };

    allGains.forEach(([type, value]) => {
      resources[type] += value;
    });

    this.resources = resources;
  };

  get allStores() {
    return {
      resources: resourcesStore,
      warehouse: warehouseStore,
      lumberjack: lumberjackStore,
      farmer: farmerStore,
      scout: scoutStore,
      beacon: beaconStore,
      researcher: researcherStore,
      ui: uiStore,
      messages: messageStore,
    };
  }
}

export default Game;
