export default function Navbar(){
    return(
    <div>
    <div class="flex justify-between  p-8 border-b-gray-300 border-2">
      <h1 class="text-white font bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-5 text-center">MyPhilosophyBlog</h1>
      <div class="relative top-7">
      <ul class="flex justify-between ml-2">
       <li class="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><a href="/">Create Blog</a></li>
       <li class="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><a href="/">Topics</a></li>
       <li class="cursor-pointer text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><a href="/">Contact</a></li>
      </ul>
    </div>
   </div>
   </div>
    )
}