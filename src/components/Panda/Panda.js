const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'
import Head from './Head'
import Body from './Body'
 const body = new Image()
    body.src = Body
    log(body)
    body.width = '100'
    body.height = '100'




class Panda extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.context = props
   


  }


  draw() {
    const head = new Path2D(Head);
   


    const ctx = this.context

    ctx.save()
  
      ctx.drawImage(body, 0, 0)
    
    
    //ctx.stroke(body)
    ctx.restore()

    return this
  }

  move(){
    this.x++
    this.y += 2
    return this
  }
  
}

export default Panda