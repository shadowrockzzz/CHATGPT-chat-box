import React from 'react'
import '../CSS Files/MyChat.css'
import '../CSS Files/AIChat.css'

export default function MyChat(prop) { 

  if (prop.arr.length%2===0){

    if (prop.arr.indexOf(prop.data)%2===0){
      return(
        <div id='message' key={prop.arr.indexOf(prop.data)}>
          {prop.data}
        </div>
      )
    }
    else{
      return(
        <div className='AImessage' key={prop.arr.indexOf(prop.data)}>
          {prop.data}
        </div>
      )
    }

  }
  else {

    if (prop.arr.indexOf(prop.data)%2===1){
      return(
        <div id='message' key={prop.arr.indexOf(prop.data)}>
          {prop.data}
        </div>
      )
    }
    else{
      return(
        <div className='AImessage' key={prop.arr.indexOf(prop.data)}>
          {prop.data}
        </div>
      )
    }

  }

}
