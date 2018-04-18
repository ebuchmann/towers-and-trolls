import { action, computed, observable } from 'mobx';

export class UiStore {
  @observable currentArea: string = 'beach';
  @observable currentTab: string = 'area';

  @action.bound
  move(area: string): void {
    this.currentArea = area;
  }

  @action.bound
  toggleTab(tab: string): void {
    this.currentTab = tab;
  }
}

export default new UiStore();
