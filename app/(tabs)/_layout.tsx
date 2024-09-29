import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Tabs } from 'expo-router'
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/fonts';
import { colors } from '@/constants/colors';
import { HeartIcon, HingeIcon, MessageIcon, PersonIcon, StarIcon } from '@/constants/icons';



const AppLayout = () => {
  return (
    <Tabs screenOptions={
      ({route})=>({
        tabBarStyle: { backgroundColor: colors.darkGrey1}
      , tabBarActiveTintColor: colors.white
      , tabBarInactiveBackgroundColor: colors.darkGrey2
      , tabBarShowLabel: false
      , tabBarIcon: ({color})=>{
        switch(route.name){
          case 'standouts': 
            return <StarIcon fill={color}/>;
          case 'likes': 
            return <HeartIcon fill={color}/>;
          case 'matches': 
            return <MessageIcon fill={color}/>;
          case 'account': 
            return <PersonIcon fill={color}/>;
          case 'index': 
            return <HingeIcon fill={color}/>;
          default: 
            return null;
        }
      }
      })

    }>
        <Tabs.Screen name="index"/>
        <Tabs.Screen name="standouts"/>
        <Tabs.Screen name="likes"/>
        <Tabs.Screen name="matches"/>
        <Tabs.Screen name="account"/>

    </Tabs>
  )
}

export default AppLayout