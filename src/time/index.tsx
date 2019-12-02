import React from 'react'
import CurrentTime from './current-time'
import TimeSelect from './time-select'

interface TimeSelectProps {
  defaultTimeLength: number
  setTimerLength: (time: number) => void
  isEditing: boolean
  setIsEditing: (status: boolean) => void
}

const Time: React.FunctionComponent<TimeSelectProps> = (props) => {
  const { defaultTimeLength, setTimerLength, isEditing, setIsEditing } = props
  const defaultSeconds = defaultTimeLength % 60
  const defaultMinutes = Math.floor(defaultTimeLength / 60)
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

  const min = () => {
    if (minutesSelected === 1) {
      return `${minutesSelected}min`
    }
    return `${minutesSelected}mins`
  }

  const sec = () => {
    if (secondsSelected === 1) {
      return `${secondsSelected}sec`
    }
    return `${secondsSelected}secs`
  }

  const time = `${min()} ${sec()}`

  if (!isEditing) {
    return (
      <CurrentTime
        editTime={() => setIsEditing(true)}
        time={time}
      />
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
