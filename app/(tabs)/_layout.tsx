import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Tabs } from 'expo-router'
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/fonts';



const AppLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index"/>
        <Tabs.Screen name="standouts"/>
        <Tabs.Screen name="likes"/>
        <Tabs.Screen name="matches"/>
        <Tabs.Screen name="account"/>

    </Tabs>
  )
}

export default AppLayout