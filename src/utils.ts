import { Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
}

export const generateValues = (params: Utils.GenerateValuesParams) => {
  const step = params.step || 1
  const offset = params.start || 0
  const length = params.end - offset + 1
  return new Array(length).fill(0).map((x, i) => step * (i + offset))
}

export const colors = {
  gray: '#A9A9A9',
  black: '#000000'
}