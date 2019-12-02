import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
}

export const colors = {
  gray: '#A9A9A9',
  black: '#000000'
}

export const generateValues = (params: Utils.GenerateValuesParams): number[] => {
  const step = params.step || 1
  const offset = params.start || 0
  const length = params.end - offset + 1
  return new Array(length).fill(0).map((x, i) => step * (i + offset))
}

export const displayTime = (minutes: number, seconds: number): string => {
  let time = `${minutes}min`
  if (minutes !== 1) {
    time = `${time}s`
  }
  time = `${time} ${seconds}sec`
  if (seconds !== 1) {
    time = `${time}s`
  }
  return time
}