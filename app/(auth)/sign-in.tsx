import { View, Text } from 'react-native'
import React from 'react'
import VideoBackground from '@/components/video-background'
import { HingeLogo } from '@/constants/icons'
import Spacer from '@/components/spacer'
import { colors } from '@/constants/colors'
import Type from '@/components/type'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignInScreen = () => {
  return (
    <VideoBackground source={require('@/assets/videos/background.mp4')} >
      <SafeAreaView >{/* style={styles.content} */}
        
        <View >{/* style={styles.branding} */}
        
          <Spacer size={230} horizontal={false} />
          <HingeLogo fill={colors.white} width={140} height={70} />
          <Spacer size={10} horizontal={false} />
          <Type variant='titleBold' color='white' textAlign={'center'} textDecorationLine={'none'}>
            The app designed to be deleted
          </Type>
        </View>
        <Type textAlign={'center'} textDecorationLine={'none'} variant='caption' color='white' >sdf</Type>
        <Type textAlign={'center'} textDecorationLine={'none'} variant='captionBold' color='white'  >sdfdsf</Type>
      </SafeAreaView>
    </VideoBackground>

  )
}

export default SignInScreen