import React from 'react'
import { registerRootComponent } from 'expo'
import { AppContextProvider } from './context'
import Timer from './timer'
import { getDimensions } from './utils'

const dimensions = getDimensions()

// Configure the size of the SVG, the width of the stroke and the length of time (in seconds).
const svgWidth = dimensions.isPortrait ? dimensions.width : dimensions.height
const strokeWidth = 24
const defaultTimeLength = 5

const App = () => (
  <AppContextProvider
    defaultTimeLength={defaultTimeLength}
    strokeWidth={strokeWidth}
    svgWidth={svgWidth}
  >
    <Timer />
  </AppContextProvider>
)

export default registerRootComponent(App)
