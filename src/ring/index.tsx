import React from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import { Circle, Svg } from 'react-native-svg'
import AppContext from '../context'
import Remaining from './remaining'
import { colors } from '../utils'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface RingProps {
  strokeWidth: number
  svgWidth: number
}

const Ring: React.FunctionComponent<RingProps> = (props) => {
  const { svgWidth, strokeWidth } = props
  const { setIsEditing, timerLength } = React.useContext(AppContext)
  const [isDone, setIsDone] = React.useState<boolean>(false)
  const [isRunning, setIsRunning] = React.useState<boolean>(false)
  const [percent, setPercent] = React.useState<Animated.Value>(new Animated.Value(0))
  const [remaining, setRemaining] = React.useState(timerLength)

  const radius = (svgWidth / 2) - (strokeWidth * 2)
  const circumference = 2 * Math.PI * radius
  const centerCoords: App.Coords = {
    x: svgWidth / 2,
    y: svgWidth / 2,
  }

  const amination = Animated.timing(
    percent,
    {
      toValue: 100,
      duration: timerLength * 1000,
      easing: Easing.linear,
    }
  )

  percent.addListener((animated) => {
    const percentRemaining = 1 - (animated.value / 100)
    const number = Math.ceil(timerLength * percentRemaining)
    if (number !== remaining) {
      setRemaining(number)
    }
  })

  const strokeDashoffset = percent.interpolate({
    inputRange: [0, 100],
    outputRange: [`${circumference}`, '0']
  })

  const onClick = () => {
    setIsEditing(false)
    if (isDone) {
      setIsDone(false)
      setPercent(new Animated.Value(0))
      return
    }
    if (isRunning) {
      setIsRunning(false)
      amination.stop()
      return
    }
    setIsRunning(true)
    amination.start(({ finished }) => {
      if (finished) {
        setIsDone(true)
      }
    })
  }

  return (
    <Svg
      height={svgWidth}
      onTouchEnd={onClick}
      style={styles.svg}
      viewBox={`0 0 ${svgWidth} ${svgWidth}`}
      width={svgWidth}
    >
      <Circle
        cx={centerCoords.x}
        cy={centerCoords.y}
        fill="none"
        r={radius}
        stroke={colors.gray}
        strokeWidth={strokeWidth}
      />
      <AnimatedCircle
        cx={centerCoords.x}
        cy={centerCoords.y}
        fill="none"
        r={radius}
        stroke={colors.black}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={strokeWidth}
      />
      <Remaining
        coords={centerCoords}
        remaining={remaining}
      />
    </Svg>
  )
}

const styles = StyleSheet.create({
  svg: {
    transform: [
      {
        rotate: '-90deg'
      },
    ],
  },
})

export default Ring
