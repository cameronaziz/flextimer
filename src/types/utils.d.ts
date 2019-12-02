export interface GenerateValuesParams {
  end: number
  start?: number
  step?: number
}

export interface Time {
  seconds: number
  minutes: number
}

export interface Dimensions {
  isPortrait: boolean
  height: number
  width: number
}

export as namespace Utils
