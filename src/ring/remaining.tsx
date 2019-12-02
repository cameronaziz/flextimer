import React from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import { Circle, Svg, Text } from 'react-native-svg'
import { colors } from '../utils'

interface RemainingProps {
  coords: App.Coords
  remaining: number
}

const Ring: React.FunctionComponent<RemainingProps> = (props) => {
  const { coords, remaining } = props

  return (
    <Text
      rotate="90"
      textAnchor="middle"
      fontSize="30"
      fill={colors.black}
      x={coords.x}
      y={coords.y}
    >
      {remaining}
    </Text>
  )
}

export default Ring
