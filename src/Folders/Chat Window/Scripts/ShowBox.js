import React, { useEffect ,useState} from 'react'
import '../CSS Files/ShowBox.css'
import MyChat from './MyChat' ;

import { Configuration ,OpenAIApi } from 'openai'
const arr = [] ;

let number = -1 ;

export default function ShowBox(props) {

  const [cal ,changeCal] = useState(0)


  if (number!==props.number){

    if (props.myChat!==""){

      arr.reverse() ;

      arr.push(props.myChat) ;

      arr.reverse() ;

      number = props.number ;

      const configuration = new Configuration({
        organization : "org-3CiQfQ6SPI9tsbaObUYIRe0h" ,
        apiKey : "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"
      })

      const OpenAI = new OpenAIApi(configuration) ; 
      const promise = (message)=>{
          return new Promise(
            function(resolve,reject){
              let response = OpenAI.createCompletion({
                "model": "curie",
                "prompt": message,
                "max_tokens": 10,
                "temperature": 1,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "logprobs": null,
                "stop": "\n"
      
              })
      
              resolve(response)
            })
          }
        
          promise(props.myChat).then((result)=>{
  
            arr.reverse()
      
            arr.push(result.data.choices[0].text) ;

            arr.reverse()

            changeCal(cal+1) ;
            
          })

    }
  }



  return(
    
    <div id='showbox' key={cal}>

      {
        arr.map((data)=>{

          return(<>
          <MyChat data={data} number={props.number} arr={arr} key={cal}></MyChat>
          </>
          )

        })
      }

    </div>

  )
}
