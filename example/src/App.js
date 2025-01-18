import React from 'react'

import WheelComponent from 'react-wheel-of-prizes'
import './index.css'

const App = () => {
  const segments = [
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
    "Test 6",
    "Test 7",
    "Test 8",
    "Test 9",
    "Test 10",
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner) => {
    console.log(winner);
  }
  
  return (
    <React.Fragment>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment="Test 1"
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={290}
        upDuration={300}
        downDuration={1000}
        randomWinningSegment={true}
      />
    </React.Fragment>
  )
}

export default App
