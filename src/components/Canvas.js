import React from 'react'
import Circle from './Circle'




class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }
  componentDidUpdate(){
    this.updateCanvas()
  }
  updateCanvas() {
    const audio = new (window.AudioContext || window.webkitAudioContext)()
    const ctx = this.refs.canvas.getContext('2d')
    const canvas = this.refs.canvas
    const mouse = new MouseEvent(canvas)
    const vw = canvas.width  = window.innerWidth
    const vh = canvas.height = window.innerHeight
    const ballRadius = 20
    
    const bola_props = {
      x: vw / 2,
      y: vh -30,
      dx: 2,
      dy: -10,
      ch: vh,
      cw: vw,
      context: ctx,
      radius: ballRadius
    }
    const bola = new Circle(bola_props)
    
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)
      // Start drawing
      bola.draw().move()
 

      // End Drawing
      requestAnimationFrame(gameLoop)
    })
  }
  render() {
    return (
      <canvas ref="canvas"/>
    )
  }
}


function randomIntFromRange(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}
export default Canvas
