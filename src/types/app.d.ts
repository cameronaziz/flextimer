export interface Coords {
  x: number
  y: number
}

export interface Circle {
  center: Coords
  circumference: number
  radius: number
  strokeWidth: number
  width: number
}

export as namespace App
