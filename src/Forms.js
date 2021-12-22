import { useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";




export default function Forms(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   /* const [data, setData] = useState([{
      Topic: "",
      Author: "",
      Content: ""
    }]);*/
    const [Title, setTitle] = useState("");
    const [Topic, setTopic] = useState("");
    const [Content, setContent] = useState("");
    const [Author, setAuthor] = useState("");

    const history = useNavigate();

    const [addforms, setAddforms] = useState(
        ""

    )

    const preventer = (hand) => {
      hand.preventDefault();
    }

    function handlePosters(e) {
      
      setLoading(true)
      const BlogObject = { Title, Content, Topic, Author };
      console.log(BlogObject);
      axios.post("http://localhost:3002", BlogObject, {headers: { 'Content-Type': 'application/json'}})
      .then(res => console.log(res.data))
      .then(setLoading(false))
      .then(console.log("Added Blog"))
      .then(history.push("/"))
      .catch(() => setError(true), "There was a network error")
    }

    
  
    return(
      <div className='m-24'>
      <h2 className='text-4xl text-red-700'>Submit your Blog!</h2>
      <div className='mt-14 border-teal-300 border-2 pb-96'>
        <form method='post' >
          <ul className='m-4'>
            <li className='text-2xl'>
              <label>Topic:</label>
            </li>
            <li>
              <select
                className='border-2 border-red-400 mt-4 p-3'
                name='cars'
                id='cars'
                onChange = {(e) => {setTopic(e.target.value) }}
              >
                <option value='Philosophy'>Philosophy</option>
                <option value='Ethics'>Ethics</option>
                <option value='Buddhism'>Buddhism</option>
                <option value='Christianity'>Christianity</option>
              </select>
            </li>
            <li className='text-2xl mt-5 mb-5'>
              <label>Full name:</label>
            </li>
            <li>
              <input
                required
                id='fname'
                className='border-2 mb-5'
                onChange = {
                  (e) => {
                    preventer(e)
                   {setAuthor((e.target.value))}
                  }}
              />
            </li>
            <label className='block text-2xl mb-5'>Content:</label>
                
            <textarea name='content' cols='80' rows='3' className='border-2' onChange = {(e) => {setContent(e.target.value)}}/>
            <li>
              <button
                type='button'
                className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-9 mr-2 mb-2'
                onClick = {() => handlePosters}
              >
                Submit Blog
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
    )


}



