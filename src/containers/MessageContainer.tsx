import * as React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'react-emotion';
import { Message, MessagesStore } from '../store/messages';

export interface MessageContainerProps {
  messages?: MessagesStore;
}

@inject('messages')
@observer
class MessageContainer extends React.Component<MessageContainerProps> {
  render() {
    const { messages } = this.props.messages;

    return messages.map(({ id, text }) => <p key={id}>{text}</p>);
  }
}

export default MessageContainer;
