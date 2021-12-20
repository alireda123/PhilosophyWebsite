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
        <div className="m-3">
            <h2>Featured Blogs</h2>
            {blogdata && blogdata.map((item) => 
            <>
                <h3>{item.topic}</h3>
                <p>{item.content}</p>
                <p>Written by {item.author}</p>
            </>
            )}


        </div> 
        
    )

}
