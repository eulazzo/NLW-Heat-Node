import React from 'react';
import {View} from 'react-native';
import { Message } from '../message';
import {styles} from './styles'
import { ScrollView } from 'react-native';

export const MessageList = ()=>{

  const message = {
    id:'1',
    text:'mensagem de test',
    user:{
      name:'Lucas',
      avatar_url:'https://github.com/eulazzo.png'
    }}

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      
    </ScrollView>
  );
}