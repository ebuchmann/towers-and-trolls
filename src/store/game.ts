import Field from './field';
import Player from './player';
import Tower from './tower';
import currenciesStore from './currencies';
import warehouseStore from './warehouse';
import { action, observable } from 'mobx';

export class Enemy {
  @observable id: number = Date.now();
  coins: number = Math.floor(Math.random() * 5) + 1;
  @observable hp: number;
  @observable maxHp: number;

  constructor(level: number = 1) {
    this.hp = Math.floor(Math.random() * level * 10) + 15;
    this.maxHp = this.hp;
  }

  // If enemy has armor, remainder should take that into account and return an accurate number
  @action.bound
  takeDamage(damage: number): number {
    const remainder = damage - this.hp;
    this.hp = Math.max(this.hp - damage, 0);
    // return remainder >= 0 ? remainder : 0;
    return Math.max(remainder, 0);
  }
}

class Game {
  playerStore: Player = new Player();
  fieldStore: Field = new Field();
  towerStore: Tower = new Tower();

  constructor() {
    setInterval(this.loop, 3500);
  }

  loop = () => {
    // Adds first, to get the enemy in the array for rendering
    this.fieldStore.addEntity(new Enemy());

    // Tower deals damage to enemies, if any die they get set to null (do not remove from array)
    let damage = this.towerStore.damage;
    let index = this.fieldStore.nextEnemy;
    let loop = 0;
    do {
      loop += 1;
      if (index !== -1) {
        damage = this.fieldStore.entities[index].takeDamage(damage);
        if (this.fieldStore.entities[index].hp <= 0) {
          // Get rewards!
          currenciesStore.addCoins(this.fieldStore.entities[index].coins);
          // Kill off enemy
          // this.fieldStore.entities[index] = null;
        }
        index = this.fieldStore.nextEnemy;
      }
    } while (damage > 0 && index > -1 && loop < 50);

    currenciesStore.addLumber(1);
    // Removes enemy from the front, if it's not null it deals damage to tower
    const removed = this.fieldStore.removeEntity();
  };

  get allStores() {
    return {
      field: this.fieldStore,
      player: this.playerStore,
      tower: this.towerStore,
      currencies: currenciesStore,
      warehouse: warehouseStore,
    };
  }
}

export default Game;
