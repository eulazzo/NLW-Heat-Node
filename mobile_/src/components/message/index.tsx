import React from 'react';
import {Text, View} from 'react-native';
import { UserPhoto } from '../userPhoto';

import { styles } from './style';

export type MessageProps={
  text:string,
  id:string,
  user:{
    name:string,
    avatar_url:string
  }
}

type Props = {
  data:MessageProps;
}

export const Message = ({data}:Props) =>{
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {data.text}
      </Text>
       
      <View style={styles.userProfileContainer}>
        <UserPhoto 
          sizes='SMALL' 
          imageUri={data.user.avatar_url}
        />
        <Text style={styles.username}>
          {data.user.name}
        </Text>
      </View>

    </View>
  );
}