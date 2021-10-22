import React from 'react';
import LogoSvg from '../../assets/logo.svg'
 import {
  View,
  Text
} from 'react-native';

import { styles } from './style';
import { TouchableOpacity } from 'react-native';

import { UserPhoto } from '../userPhoto';

export const Header = ()=>{
  return (
    <View style={styles.container}>
      <LogoSvg  />
      
      <View style={styles.logoutBtn}>
        <TouchableOpacity >
          <Text style={styles.logOutText}>Sair</Text>
        </TouchableOpacity >
        <UserPhoto imageUri={'https://thispersondoesnotexist.com/image'}/>
      </View>
    </View>
  );
}