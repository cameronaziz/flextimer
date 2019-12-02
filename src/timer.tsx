import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { AppContextProvider } from './context'
import Ring from './ring'
import TimeSelect from './time'
import { dimensions } from './utils'

// Configure the size of the SVG, the width of the stroke and the length of time (in seconds).
const svgWidth = dimensions.fullWidth
const strokeWidth = 24
const defaultTimeLength = 5

const Timer = () => (
  <AppContextProvider
    defaultTimeLength={defaultTimeLength}
  >
    <SafeAreaView style={styles.container}>
      <Ring
        strokeWidth={strokeWidth}
        svgWidth={svgWidth}
      />
      <TimeSelect />
    </SafeAreaView>
  </AppContextProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Timer
