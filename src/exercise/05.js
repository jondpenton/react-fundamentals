// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

function Box({ className, style, size = 'small', ...rest }) {
  const classNames = ['box', `box--${size}`]

  if (className) {
    classNames.push(className)
  }

  return (
    <div
      className={classNames.join(' ')}
      style={{
        fontStyle: 'italic',
        ...style,
      }}
      {...rest}
    />
  )
}

const smallBox = (
  <Box style={{ backgroundColor: 'lightblue' }}>small lightblue box</Box>
)
const mediumBox = (
  <Box style={{ backgroundColor: 'pink' }} size="medium">
    medium pink box
  </Box>
)
const largeBox = (
  <Box style={{ backgroundColor: 'orange' }} size="large">
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
