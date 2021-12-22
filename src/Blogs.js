import axios from 'axios';
import {useEffect, useState} from "react"


export default function Blogs(){
    
    const [blogdata, setBlogdata] = useState(null)
    
    const effect = () => {
        axios.get('http://localhost:3002/topics')
        .then(console.log("fetching"))
        .then(({data}) => {setBlogdata(data)})
        .catch("error returns")
    }

    useEffect(effect, [])

    

    return(
      <div className="m-24" id="blogsid">
          <h2 className="text-3xl text-red-600 font-semibold">Featured Blogs</h2>
          {blogdata && blogdata.map((item) => 
          <ul>
            <li className="list-style-none shadow-xl mb-5 mt-5 p-5 hover:shadow-2xl hover:custom hover: cursor-pointer hover: scale-105">
              <h3 className="text-xl mb-2">{item.topic}</h3>
              <p className="mb-2">{item.content}</p>
              <p>Written by {item.author}</p>
              </li>
              </ul>
              )}
      </div>

);
    

}
