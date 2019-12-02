import React from 'react'
import { Picker, View, StyleSheet, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'
import AppContext from '../context'
import { Button } from '../ui'
import { generateValues } from '../utils'

interface TimeSelectProps {
  secondsSelected: number
  minutesSelected: number
  setMinutes: (time: number) => void
  setSeconds: (time: number) => void
}

const TimeSelect: React.FunctionComponent<TimeSelectProps> = () => {
  const { timerLength, setTimerLength, setIsEditing, dimensions } = React.useContext(AppContext)
  const defaultSeconds = timerLength % 60
  const defaultMinutes = Math.floor(timerLength / 60)
  const minutes = generateValues({ end: 59 })
  const seconds = generateValues({ end: 59 })
  const [secondsSelected, setSecondsSelected] = React.useState(defaultSeconds)
  const [minutesSelected, setMinutesSelected] = React.useState(defaultMinutes)

  const setTime = () => {
    const time = (minutesSelected * 60 ) + secondsSelected
    setTimerLength(time)
    setIsEditing(false)
  }

  const setMinutes = (minutes: number) => {
    setMinutesSelected(minutes)
  }

  const setSeconds = (seconds: number) => {
    setSecondsSelected(seconds)
  }

  const clickCloseOutside = (e: GestureResponderEvent) => {
    e.stopPropagation()
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: dimensions.isPortrait ? undefined : 'center',
      width: dimensions.isPortrait ? dimensions.width : 200,
      height: dimensions.isPortrait ? 200 : dimensions.height,
    },
    picker: {
      flex: 1,
      height: 50,
    },
    label: {
      textAlign: 'center',
      fontSize: 25,
    },
    select: {
      display: 'flex',
      flexDirection: 'row',
    },
    button: {
      alignSelf: 'center',
    },
  })

  return (
    <TouchableWithoutFeedback onPress={clickCloseOutside}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            onPress={setTime}
            label="Done"
            variation="small"
          />
        </View>
        <View style={styles.select}>
          <View style={styles.picker}>
            <Picker
              selectedValue={minutesSelected}
              onValueChange={setMinutes}
            >
              {minutes.map((minute: number) => (
                <Picker.Item
                  key={minute}
                  label={minute.toString()}
                  value={minute}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.picker}>
            <Picker
              selectedValue={secondsSelected}
              onValueChange={setSeconds}
            >
              {seconds.map((second: number) => (
                <Picker.Item
                  key={second}
                  label={second.toString()}
                  value={second}
                />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TimeSelect
