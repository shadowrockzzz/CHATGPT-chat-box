import React, { Component } from 'react'

import '../CSS Files/box.css'
import Prompt from './Prompt'

export default class Box extends Component {
  render() {
    return (
      <div className="box_container"> ChatGPT bot chatbox
      
      <Prompt />
      
      </div>
    )
  }
}
