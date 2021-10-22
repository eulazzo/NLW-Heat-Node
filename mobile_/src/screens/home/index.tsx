import React from "react";
import { View } from 'react-native'
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
 } from '@expo-google-fonts/roboto'
import { styles } from "./style";  
import AppLoading from "expo-app-loading";
import { Header } from "../../components/header";

export const Home = ()=> {

  const [fontsloaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsloaded) return <AppLoading />

  return (
    <View style={styles.container }>
      <Header />
    </View>
  )
}