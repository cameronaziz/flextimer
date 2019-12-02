import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import { Circle, Svg } from 'react-native-svg'
import AppContext from '../context'
import { colors } from '../utils'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface RingProps {
}

const Ring: React.FunctionComponent<RingProps> = () => {
  const { strokeDashoffset, toggleTimer, circle, dimensions } = React.useContext(AppContext)

  const styles = StyleSheet.create({
    svg: {
      transform: [
        {
          rotate: '-90deg'
        },
      ],
    },
  })

  return (
    <Svg
      height={circle.width}
      onTouchEnd={toggleTimer}
      style={styles.svg}
      viewBox={`0 0 ${circle.width} ${circle.width}`}
      width={circle.width}
    >
      <Circle
        cx={circle.center.x}
        cy={circle.center.y}
        fill="none"
        r={circle.radius}
        stroke={colors.gray}
        strokeWidth={circle.strokeWidth}
      />
      <AnimatedCircle
        cx={circle.center.x}
        cy={circle.center.y}
        fill="none"
        r={circle.radius}
        stroke={colors.black}
        strokeDasharray={`${circle.circumference} ${circle.circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={circle.strokeWidth}
      />
    </Svg>
  )
}

export default Ring
