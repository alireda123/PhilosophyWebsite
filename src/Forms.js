import { useState, useEffect} from "react";
import axios from "axios";



export default function Forms(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    return(
        <div className="">
           <form method = "post" action= "" className="">
               <ul className="">


               </ul>
               
               
            </form> 
        </div>
    )


}