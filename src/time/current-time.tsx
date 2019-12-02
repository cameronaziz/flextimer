import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppContext from '../context'
import { secondsToTime, displayTime } from '../utils'
import { Button } from '../ui'

interface CurrentTimeProps {

}

const CurrentTime: React.FunctionComponent<CurrentTimeProps> = () => {
  const { setIsEditing, animationTimeRemaining, dimensions } = React.useContext(AppContext)
  const time = displayTime(secondsToTime(animationTimeRemaining))

  const styles = StyleSheet.create({
    container: {
      width: dimensions.isPortrait ? undefined : 200,
      height: dimensions.isPortrait ? 200 : undefined,
    },
  })

  return (
    <View style={styles.container}>
      <Button
        label={time}
        onPress={() => setIsEditing(true)}
        stopPropogation
      />
    </View>
  )
}

export default CurrentTime
