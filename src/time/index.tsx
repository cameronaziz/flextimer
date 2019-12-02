import React from 'react'
import AppContext from '../context'
import CurrentTime from './current-time'
import TimeSelect from './time-select'

interface TimeSelectProps {

}

const Time: React.FunctionComponent<TimeSelectProps> = () => {
  const { isEditing, setTimerLength, timerLength } = React.useContext(AppContext)
  const defaultSeconds = timerLength % 60
  const defaultMinutes = Math.floor(timerLength / 60)
  const [secondsSelected, setSecondsSelected] = React.useState(defaultSeconds)
  const [minutesSelected, setminutesSelected] = React.useState(defaultMinutes)

  const setMinutes = (minutes: number) => {
    setminutesSelected(minutes)
    const time = (minutes * 60 ) + secondsSelected
    setTimerLength(time)
  }

  const setSeconds = (seconds: number) => {
    setSecondsSelected(seconds)
    const time = (minutesSelected * 60 ) + seconds
    setTimerLength(time)
  }


  if (!isEditing) {
    return (
      <CurrentTime />
    )
  }

  return (
    <TimeSelect
      minutesSelected={minutesSelected}
      secondsSelected={secondsSelected}
      setSeconds={setSeconds}
      setMinutes={setMinutes}
    />
  )
}

export default Time
