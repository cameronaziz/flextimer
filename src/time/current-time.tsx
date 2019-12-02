import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { dimensions, colors } from '../utils'

interface CurrentTimeProps {
  time: string
  editTime: () => void
}

const CurrentTime: React.FunctionComponent<CurrentTimeProps> = (props) => {
  const { editTime, time } = props

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={editTime}
    >
      <Text
        style={styles.text}
      >
        {time}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacity: {
    width: dimensions.fullWidth * 0.7,
    color: colors.black,
    borderRadius: 5,
    borderWidth: 1,
    minHeight: 60,
    borderColor: colors.gray,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  }
})

export default CurrentTime