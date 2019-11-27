import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import { Circle, Svg } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface RingProps {
  strokeWidth: number
  svgWidth: number
}

const Ring: React.FunctionComponent<RingProps> = ({ svgWidth, strokeWidth }) => {
  const [isDone, setIsDone] = React.useState<boolean>(false)
  const [isRunning, setIsRunning] = React.useState<boolean>(false)
  const [percent, setPercent] = React.useState<Animated.Value>(new Animated.Value(0))

  const radius = (svgWidth / 2) - (strokeWidth * 2)
  const circumference = 2 * Math.PI * radius
  const centerCoords = {
    x: svgWidth / 2,
    y: svgWidth / 2,
  }

  const amination = Animated.timing(
    percent,
    {
      toValue: 100,
      duration: 5000,
    }
  )

  const strokeDashoffset = percent.interpolate({
    inputRange: [0, 100],
    outputRange: [`${circumference}`, '0']
  })

  const styles = StyleSheet.create({
    svg: {
      transform: [
        { rotate: '-90deg'},
      ],
    },
  })

  const onClick = () => {
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
        stroke="#A9A9A9"
        strokeWidth={strokeWidth}
      />
      <AnimatedCircle
        cx={centerCoords.x}
        cy={centerCoords.y}
        fill="none"
        r={radius}
        stroke="#000000"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={strokeWidth}
      />
    </Svg>
  )
}

export default Ring
