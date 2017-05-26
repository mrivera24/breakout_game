const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Rectangle extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.context = this.props.context
    this.x = this.props.x
    this.ch = this.props.ch
    //this.y = this.props.y
    this.width = this.props.width
    this.height = this.props.height
    this.rightPressed = this.props.rightPressed
    /* this.end = this.props.end
    this.clockwise = this.props.clockwise */

    }

  draw() {
    if(this.rightPressed) {
      this.x += 7
    }
    else if(this.leftPressed) {
      this.x -= 7
    }
    const ctx = this.context
    // Hexadecimal Color Red
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle="#FF0000";
    ctx.rect(this.x, this.ch - this.height, this.width, this.height)
    ctx.fill()
    ctx.restore()
    ctx.closePath()
    return this
    }

  move(){
    this.x++
    this.y += 2
    return this
  }
}

export default Rectangle
