import React from 'react'
import Circle from './Circle'
import Square from './Rectangle'



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
    canvas.addEventListener("keydown", keyDownHandler, false);
    canvas.addEventListener("keyup", keyUpHandler, false);
    let rightPressed = false
    let leftPressed = false
    const ballRadius = 20
    const paddleHeight = 10
    const paddleWidth = 75
    const paddleX = (vw - paddleWidth) / 2
    const paddle_props = {
      rightPressed: rightPressed,
      leftPressed: leftPressed,
      width: paddleWidth, 
      height: paddleHeight,
      x: paddleX,
      context: ctx,
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
      radius: ballRadius
    }
    const bola = new Circle(bola_props)
    const paddle = new Square(paddle_props)
    function keyDownHandler(e) {
      let rightPressed = false
      let leftPressed = false
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
  let rightPressed = false
  let leftPressed = false
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, vw, vh)
      // Start drawing
      bola.draw().move()
      paddle.draw()

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
