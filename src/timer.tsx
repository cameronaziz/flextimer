import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import AppContext from './context'
import Ring from './ring'
import TimeSelect from './time'
import ClickWrapper from './click-wrapper'


const Timer: React.FunctionComponent = () => {
  const { dimensions } = React.useContext(AppContext)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: dimensions.isPortrait ? 'column' : 'row',
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  return (
    <ClickWrapper>
      <SafeAreaView style={styles.container}>
        <Ring />
        <TimeSelect />
      </SafeAreaView>
    </ClickWrapper>
  )
}

export default Timer
