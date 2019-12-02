import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { useAminatedStroke } from './hooks'
import { generateCircle, getDimensions } from './utils'

interface AppContextProviderProps {
  defaultTimeLength: number
  strokeWidth: number
  svgWidth: number
}

interface AppContextState {
  animationTimeRemaining: number
  circle: App.Circle
  isEditing: boolean
  dimensions: Utils.Dimensions
  setIsEditing: (status: boolean) => void
  setTimerLength: (time: number) => void
  strokeDashoffset: Animated.AnimatedInterpolation
  timerLength: number
  toggleTimer: () => void
}

const defaultCircle: App.Circle = {
  center: {
    x: 0,
    y: 0
  },
  circumference: 0,
  radius: 0,
  strokeWidth: 0,
  width: 0
}

const defaultState: AppContextState = {
  animationTimeRemaining: 0,
  circle: defaultCircle,
  isEditing: false,
  dimensions: getDimensions(),
  setIsEditing: () => {},
  setTimerLength: () => {},
  strokeDashoffset: null,
  timerLength: 0,
  toggleTimer: () => {}
}

const AppContext = React.createContext(defaultState)

export const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = (props) => {
  const { children, defaultTimeLength, svgWidth, strokeWidth } = props
  const [timerLength, setTimerLength] = React.useState<number>(defaultTimeLength)
  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [isDone, setIsDone] = React.useState<boolean>(false)
  const [isRunning, setIsRunning] = React.useState<boolean>(false)
  const [dimensions, setDimensions] = React.useState<Utils.Dimensions>(getDimensions())

  const circle = generateCircle(svgWidth, strokeWidth)

  const { animation, reset, timeRemaining, strokeDashoffset } = useAminatedStroke({
    circumference: circle.circumference,
    animationLength: timerLength
  })

  Dimensions.addEventListener(
    'change',
    () =>
      {
        const currentDimensions = getDimensions()
        setDimensions(currentDimensions)
      }
  )

  const toggleTimer = () => {
    if (!isEditing) {
      if (isDone) {
        setIsDone(false)
        reset()
        return
      }
      if (isRunning) {
        setIsRunning(false)
        animation.stop()
        return
      }
      setIsRunning(true)
      animation.start(({ finished }) => {
        if (finished) {
          setIsDone(true)
        }
      })
    }
  }

  const setTimerLengthLocal = (time: number) => {
    if (timerLength !== time) {
      reset(time)
      setTimerLength(time)
    }
  }

  const state: AppContextState = {
    animationTimeRemaining: timeRemaining,
    circle,
    isEditing,
    dimensions,
    setIsEditing,
    setTimerLength: setTimerLengthLocal,
    strokeDashoffset: strokeDashoffset,
    timerLength,
    toggleTimer,
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext