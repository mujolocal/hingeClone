import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {

    const [isSigningIn, setIsSigningIn] = useState(false);
 
    return <Stack>
        <Stack.Screen name='sing-in' options={{
            headerShown:false
        }}/>
    </Stack>;

}

export default AuthLayout