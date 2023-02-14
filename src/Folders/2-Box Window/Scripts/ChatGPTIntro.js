import React, { Component ,useEffect,useState} from 'react' ;
import { Configuration, OpenAIApi } from "openai";

export default class ChatGPTIntro extends Component {

    //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

    
  render() {
      const configuration = new Configuration({
        organization : "org-3CiQfQ6SPI9tsbaObUYIRe0h" ,
        apiKey : "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"
    })

    const OpenAI = new OpenAIApi(configuration) ;

    const response = OpenAI.createCompletion({
        "model": "curie",
        "prompt": "Give me your details with specifications.",
        "max_tokens": 100,
        "temperature": 1,
        "top_p": 1,
        "n": 1,
        "stream": false,
        "logprobs": null,
        "stop": "\n"
      })

    console.log(response) ;

    return (
      <div>Hello World</div>
    )
  }
}
