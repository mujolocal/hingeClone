import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { typography } from '@/constants/typography'
import { colors } from '@/constants/colors';
type TypeProps = {
    variant?: keyof typeof typography;
    color?: keyof typeof colors;
    textAlign: 'left'| 'center' | 'right';
    textDecorationLine: 'none' | 'underline' | 'line-through';
    style?: TextStyle;
    children: React.ReactNode;
}
const type = ({
    variant= 'body'
    ,color= 'black'
    ,textAlign= 'left'
    , textDecorationLine= 'none'
    ,style
    ,children
}: TypeProps) => {
  return (
    <Text style={
        [typography[variant]
        ,{
            color:colors[color]
            ,textAlign
            ,textDecorationLine
        }

        ]
    }>
        {children}
    </Text>

  )
}

export default type

const styles = StyleSheet.create({})