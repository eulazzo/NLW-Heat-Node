import React from 'react';
import LogoSvg from '../../assets/logo.svg'

import {
  View,
  Text
} from 'react-native';

import { styles } from './style';
import { TouchableOpacity } from 'react-native';
export const Header = ()=>{
  return (
    <View style={styles.container}>
      <LogoSvg  />
      <TouchableOpacity >
        <Text style={styles.logOutText}>Sair</Text>
      </TouchableOpacity >
    </View>
  );
}