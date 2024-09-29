import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SpacerProps = {
    size: number,
    horizontal: boolean
}

const Spacer = ({size, horizontal}:SpacerProps) => {


  return (
    <View
        style={{
            height: horizontal? undefined: size,
            width: !horizontal? undefined: size
        }}
    >
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({})