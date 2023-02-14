import React , {useState} from 'react'
import '../CSS Files/InputChat.css'
import ShowBox from './ShowBox'

export default function TypeBox() {

  const [myChat , setmyChat] = useState("") ;

  const [number , changeNumber] = useState(0) ;


  const clickbutton = ()=>{

    setmyChat(document.getElementsByClassName("input")[0].value) ;

    changeNumber(number+1)

  }

  return (
    <div className='input-box'>
        <ShowBox myChat={myChat} number={number}></ShowBox>
        <textarea className='input' rows="2" cols="65" spellCheck="true"></textarea>
        <button className="button" onClick={clickbutton}>Submit</button>
    </div>
  )
}
