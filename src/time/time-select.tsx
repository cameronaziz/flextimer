import React from 'react'
import { Picker, View, StyleSheet, Text } from 'react-native'
import { generateValues } from '../utils'

interface TimeSelectProps {
  secondsSelected: number
  minutesSelected: number
  setMinutes: (time: number) => void
  setSeconds: (time: number) => void
}

const TimeSelect: React.FunctionComponent<TimeSelectProps> = (props) => {
  const { secondsSelected, setSeconds, minutesSelected, setMinutes} = props
  const minutes = generateValues({ end: 59 })
  const seconds = generateValues({ end: 59 })

  return (
    <View style={styles.container}>
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
        {/* <Text style={styles.label}>min</Text> */}
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
        {/* <Text style={styles.label}>sec</Text> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    height: 50,
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
  },
  container: {
    display: 'flex',
    width: 100,
    flexDirection: 'row'
  },
})

export default TimeSelect
