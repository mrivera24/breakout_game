import React from 'react'
import Circle from './Circle'
import Square from './Rectangle'
import KbEvent from '../inputs/Keyboard'



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
    //const mouse = new MouseEvent(canvas)
    const keyboard = new KbEvent(canvas)
    keyboard.keyDownHandler().keyUpHandler()
    const vw = canvas.width  = window.innerWidth
    const vh = canvas.height = window.innerHeight
    const ballRadius = 20
    const paddleHeight = 10
    const paddleWidth = 75
    const paddleX = (vw - paddleWidth) / 2
    const paddle_props = {
      kb: keyboard,
      width: paddleWidth, 
      height: paddleHeight,
      x: paddleX,
      context: ctx,
      audio: audio,
      ch: vh
    }
    const bola_props = {
      x: vw / 2,
      y: vh -30,
      dx: 2,
      dy: -10,
      ch: vh,
      cw: vw,
      context: ctx,
      audio: audio,
      radius: ballRadius
    }

    const square_props = {
      width: 200,
      height: 200,
      x: 500,
      ch: 500,
      context: ctx,
      color :"green"
    }


    const square = new Square(square_props)
    const bola = new Circle(bola_props)
    const paddle = new Square(paddle_props)


    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)
      // Start drawing
      bola.draw().move()
      paddle.draw().move()
      square.draw().move()

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
