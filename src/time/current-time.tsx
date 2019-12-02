import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import AppContext from '../context'
import { dimensions, colors } from '../utils'

interface CurrentTimeProps {
  time: string
}

const CurrentTime: React.FunctionComponent<CurrentTimeProps> = (props) => {
  const { time } = props
  const { setIsEditing } = React.useContext(AppContext)

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => setIsEditing(true)}
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