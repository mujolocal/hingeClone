import React, { useEffect } from 'react'
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font';
import { fonts } from '@/constants/fonts';

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [loaded, error] = useFonts(fonts);
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  
  return (
    <Slot/>
  )
}

export default AppLayout