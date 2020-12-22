// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
let smallStyle = {fontStyle: "italic", backgroundColor: "lightblue"}
let mediumStyle = {fontStyle: "italic", backgroundColor: "pink"}
let largeStyle = {fontStyle: "italic", backgroundColor: "orange"}

// const smallBox = <div className="box--small" style={smallStyle}>small lightblue box</div>
// const mediumBox = <div className="box--medium" style={mediumStyle}>medium pink box</div>
// const largeBox = <div className="box--large" style={largeStyle}>large orange box</div>

function Box({size, style}){
  let boxSize = size ? `box--${size}` : ""
  return (
    <div className={`${boxSize}`} style={style}>Hi</div>
  )
}

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// Using Custom Component

function App() {
  return (
    <div>
      <Box size="small" style={smallStyle}/>
      <Box size="medium" style={mediumStyle}/>
      <Box size="large" style={largeStyle}/>
    </div>
  )
}

export default App
