import { Dimensions } from 'react-native'

export const colors = {
  black: '#000000',
  gray: '#A9A9A9',
  white: '#ffffff'
}

export const generateValues = (params: Utils.GenerateValuesParams): number[] => {
  const step = params.step || 1
  const offset = params.start || 0
  const length = params.end - offset + 1
  return new Array(length).fill(0).map((x, i) => step * (i + offset))
}

export const getDimensions = (): Utils.Dimensions => {
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  const dimensions = {
    height,
    width,
    isPortrait: false
  }
  if (height > width) {
    dimensions.isPortrait = true
  }
  return dimensions
}

export const displayTime = (timeToDisplay: Utils.Time): string => {
  const { minutes, seconds } = timeToDisplay
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

export const secondsToTime = (timerLength: number): Utils.Time => {
  const seconds = timerLength % 60
  const minutes = Math.floor(timerLength / 60)
  return {
    seconds,
    minutes
  }
}

export const generateCircle = (svgWidth: number, strokeWidth: number): App.Circle => {
  const radius = (svgWidth / 2) - (strokeWidth * 2)
  const circumference = 2 * Math.PI * radius
  const centerCoords: App.Coords = {
    x: svgWidth / 2,
    y: svgWidth / 2,
  }
  return {
    center: centerCoords,
    circumference,
    radius,
    strokeWidth,
    width: svgWidth,
  }
}