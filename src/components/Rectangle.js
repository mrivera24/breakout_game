const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Rectangle extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.context = this.props.context
    this.x = this.props.x
    this.y = this.props.y
    this.width = this.props.width
    this.height = this.props.height
    /* this.end = this.props.end
    this.clockwise = this.props.clockwise */

  }

  draw() {
    const ctx = this.context
    // Hexadecimal Color Red
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle="#FF0000";
    ctx.fillRect(this.x, this.y, this.width, this.height)
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
