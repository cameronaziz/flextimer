import React from 'react'

interface AppContextProviderProps {
  defaultTimeLength: number
}

interface AppContextState {
  isEditing: boolean
  setIsEditing: (status: boolean) => void
  setTimerLength: (time: number) => void
  timerLength: number
}

const defaultState: AppContextState = {
  isEditing: false,
  setIsEditing: () => {},
  setTimerLength: () => {},
  timerLength: 0,
}

const AppContext = React.createContext(defaultState)

export const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = (props) => {
  const { children, defaultTimeLength } = props
  const [timerLength, setTimerLength] = React.useState(defaultTimeLength)
  const [isEditing, setIsEditing] = React.useState(false)


  const state: AppContextState = {
    isEditing,
    timerLength,
    setIsEditing,
    setTimerLength,
  }

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext