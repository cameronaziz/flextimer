import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import AppContext from './context'

const ClickWrapper: React.FunctionComponent = (props) => {
  const { children } = props
  const { setIsEditing, isEditing } = React.useContext(AppContext)

  const click = () => {
    if (isEditing) {
      setIsEditing(false)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={click}
    >
      {children}
    </TouchableWithoutFeedback>
  )
}

export default ClickWrapper
