import { action, computed, observable } from 'mobx';
import resourceStore, { resourceTypes } from './resources';

export interface Message {
  id: string;
  text: string;
}

export class MessagesStore {
  @observable messages: Message[] = [];

  @action.bound
  displayMessage(text: string): void {
    this.messages.push({ id: `${Math.random()}-${Date.now()}`, text });
  }
}

export default new MessagesStore();
