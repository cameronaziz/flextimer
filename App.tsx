import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Ring from './src/ring'
import TimeSelect from './src/time'
import { dimensions } from './src/utils'

// Configure the size of the SVG, the width of the stroke and the length of time (in seconds).
const svgWidth = dimensions.fullWidth
const strokeWidth = 24
const defaultTimeLength = 5

const App = () => {
  const [timerLength, setTimerLength] = React.useState(defaultTimeLength)
  const [isEditing, setIsEditing] = React.useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Ring
        strokeWidth={strokeWidth}
        svgWidth={svgWidth}
        timerLength={timerLength}
        setIsEditing={setIsEditing}
      />
      <TimeSelect
        defaultTimeLength={defaultTimeLength}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setTimerLength={setTimerLength}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
