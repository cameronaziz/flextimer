import React from 'react'
import { Animated, Easing } from 'react-native'

interface UseAminatedStrokeParams {
  circumference: number
  animationLength: number
}

export interface UseAminatedStrokeResult {
  animation: Animated.CompositeAnimation
  strokeDashoffset: Animated.AnimatedInterpolation
  reset: (time?: number) => void
  timeRemaining: number
}

const useAminatedStroke = (params: UseAminatedStrokeParams): UseAminatedStrokeResult => {
  const { animationLength, circumference } = params
  const [length, setLength] = React.useState(animationLength)
  const [percent, setPercent] = React.useState<Animated.Value>(new Animated.Value(0))
  const [remaining, setRemaining] = React.useState(animationLength)

  let animation = Animated.timing(
    percent,
    {
      toValue: 100,
      duration: animationLength * 1000,
      easing: Easing.linear,
    }
  )

  const strokeDashoffset = percent.interpolate({
    inputRange: [0, 100],
    outputRange: [`${circumference}`, '0']
  })

  percent.addListener((animated) => {
    const percentRemaining = 1 - (animated.value / 100)
    const number = Math.ceil(animationLength * percentRemaining)
    if (number !== remaining) {
      setRemaining(number)
    }
  })

  const reset = (time?: number) => {
    if (time) {
      setLength(time)
    }
    const duration = time || length
    setRemaining(duration)
    setPercent(new Animated.Value(0))
    animation = Animated.timing(
      percent,
      {
        toValue: 100,
        duration: duration * 1000,
        easing: Easing.linear,
      }
    )
  }

  return {
    animation,
    strokeDashoffset,
    reset,
    timeRemaining: remaining
  }
}

export default useAminatedStroke
