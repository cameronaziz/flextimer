import React from 'react'
import { TouchableOpacity, StyleSheet, Text, GestureResponderEvent, View, ViewStyle } from 'react-native'
import { getDimensions, colors } from '../utils'

interface ButtonProps {
  onPress: (e: GestureResponderEvent) => void
  label: string
  stopPropogation?: boolean
  variation?: UI.Variation
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { label, onPress, stopPropogation, variation } = props
  const dimensions = getDimensions()
  const buttonVariation: UI.Variation = variation ? variation : 'large'
  const height = buttonVariation === 'large' ? 60 : 35
  const width = buttonVariation === 'large' ? dimensions.width * 0.7 : 150
  const fontSize = buttonVariation === 'large' ? 25 : 15

  const commonStyles: ViewStyle = {
    borderRadius: 5,
    justifyContent: 'center',
  }

  const styles = StyleSheet.create({
    touchableOpacity: {
      maxWidth: width,
      color: colors.black,
      borderWidth: 1,
      borderColor: colors.gray,
      shadowColor: colors.gray,
      shadowOffset:{
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      height,
      ...commonStyles
    },
    view: {
      flex: 1,
      marginTop: 1,
      paddingHorizontal: 30,
      backgroundColor: colors.white,
      height: height - 2,
      ...commonStyles
    },
    text: {
      fontSize,
      textAlign: 'center',
    }
  })

  const handlePress = (e: GestureResponderEvent) => {
    if (stopPropogation) {
      e.stopPropagation()
    }
    onPress(e)
  }

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={handlePress}
    >
      <View style={styles.view}>
        <Text
          style={styles.text}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
