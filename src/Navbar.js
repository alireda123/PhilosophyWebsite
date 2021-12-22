import { Link } from "react-router-dom"

export default function Navbar(){
    return(
    <div className="sticky">
    <div className="flex justify-between  p-8 border-b-gray-300 border-2">
      <h1 className="text-white font bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-5 text-center">MyPhilosophyBlog</h1>
      <div className="relative top-7">
      <ul className="flex justify-between ml-2">
       <li className="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="/Forms">Create Blog</Link></li>
       <li className="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="/">Topics</Link></li>
       <li className="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
   </div>
   </div>
    )
}