import '../CSS Files/prompt.css'
import { Configuration, OpenAIApi } from "openai";
import React , {useState} from 'react'

export default function Prompt() {

    const [ShowLegend , setShowLegend] = useState(0) ;

    const [message , changeMessage] = useState("") ;

    const getResponse = (message)=>{

        const configuration = new Configuration({
            organization : "org-3CiQfQ6SPI9tsbaObUYIRe0h" ,
            apiKey : "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"
        })

        const response = new OpenAIApi(configuration).createCompletion({
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

        response.then((res)=>{
            console.log(res.data.choices[0].text)
            changeMessage(res.data.choices[0].text) ;
            });

    }

    if (ShowLegend === 0) {
        return (
            <div>
                <fieldset className='fieldset'>
            <h3 onClick={()=>{setShowLegend(1)}}>Question Prompt</h3>
            </fieldset>
            <button onClick={()=>{setShowLegend(0)}}>Search</button>

            <div className="output-field">
                {message}
            </div>
            </div>
          )

    }
    
    else {

        return(<div>
            <fieldset className='fieldset'>
            <legend>
                Question Prompt
            </legend>
            <input id ="inputfield"></input>
            
        </fieldset>
        <button onClick={()=>{
            getResponse(document.getElementById("inputfield").innerText)
           }}>Search</button>

            <div className="output-field">
                {message}
            </div>
        </div> )

    }

}
