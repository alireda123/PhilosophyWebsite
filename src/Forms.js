import { useState } from "react";



export default function Forms(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    return(
        <div className="">
           <form method = "post" action= "" className="">
               <ul className="">
                <li className=""></li>
                <li className=""></li>
                <li className=""></li>


               </ul>
               
               
            </form> 
        </div>
    )


}