import React from 'react'
import { StyleSheet, View } from 'react-native'
import Ring from './src/ring'
import { dimensions } from './src/utils'

// Configure the size of the SVG and the width of the stroke
const svgWidth = dimensions.fullWidth
const strokeWidth = 24

export default function App() {
  return (
    <View style={styles.container}>
      <Ring
        strokeWidth={strokeWidth}
        svgWidth={svgWidth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
