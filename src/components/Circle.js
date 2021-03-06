const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Circle extends React.Component {
  constructor(props) {
    super(props)
    log(props)
    this.context = this.props.context
    this.x = this.props.x
    this.y = this.props.y
    this.radius = this.props.radius
    this.start = 0
    this.end = Math.PI * 2 
    this.clockwise = true
    this.color = "#0095DD"
    this.ch = this.props.ch
    this.dy = this.props.dy
    this.dx = this.props.dx
    this.cw = this.props.cw
    this.gravity = 1
    this.friction = 0.99


  }

  draw() {
    if(this.x + this.dx > this.cw - this.radius || this.x + this.dx < this.radius) {
      this.dx = -this.dx
    }
    if(this.y + this.dy > this.ch - this.radius || this.y + this.dy < this.radius) {
      this.dy = -this.dy
    }

    // if (this.y +this.radius + this.dy > this.ch){
    //   this.dy = -this.dy * this.friction
    // } else {
    //   this.dy += this.gravity
    //   console.log(this.dy)
    
    // }
    // if (this.x + this.radius + this.dx > this.cw || this.x - this.radius <= 0) {
    //    this.dx = -this.dx
    // }
    
    // this.x += this.dx
    // this.y += this.dy
    const ctx = this.context
    ctx.beginPath()
    ctx.globalCompositeOperation = "difference"
    ctx.save()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, this.start, this.end, this.clockwise)
    ctx.fill()
    //ctx.stroke() 
    ctx.restore()
    ctx.closePath()
    return this
  }
  move(mouse) {
    this.x += this.dx;
    this.y += this.dy;
    return this
  }
  followMouse(mouse) {
    if (mouse) {
      this.x = mouse.x
      this.y = mouse.y
    }

    return this

  }
}

export default Circle