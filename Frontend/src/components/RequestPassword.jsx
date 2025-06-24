import { FiMail } from "react-icons/fi"
const RequestPassword =()=>{
     return (
       <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
               <div className="absolute inset-0">
                   <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-render-tropical-landscape-with-palm-trees-blue-sea_1048-6386.jpg')" }} ></div>
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-emerald-900/60 backdrop-blur-sm"></div>
               </div>
       
               <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
                   <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/30">
                       <div className="p-6 sm:p-8">
                           <div className="mb-6 text-center">
                               <div className="flex items-center justify-center mb-2">
                                   <img className="w-10 h-10 mr-2" src="https://imgs.search.brave.com/G6q83e8jpzBwEyz9J3geBeRZIBRkHJ4ZB9zmkaBmMJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2VxdWFsLWhvdXNp/bmctcG5nLWxvZ28v/ZXF1YWwtaG91c2lu/Zy1vcHBvcnR1bml0/eS1sb2dvLXBuZy0x/My5wbmc" alt="Building Kenya logo"/>
                                   <h1 className="text-3xl font-bold text-white tracking-wide">Building Kenya</h1>
                               </div>
                               <p className="text-blue-100 font-medium">Create your account and start your journey with us.</p>
                           </div>  
                               <form className="space-y-5">
                                   <div>
                                       <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
                                       <div className="relative">
                                           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiMail className="w-5 h-5 text-blue-200" /> </div>
                                           <input  type="email" className="w-full pl-10 pr-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="name@gmail.com" required/>
                                       </div>
                                   </div>
                                   
                                   <button type="submit" className= 'w-full py-3 px-4 text-white font-bold rounded-lg shadow-xl transition-all duration-300 transform '>
                                   Create Account
                                   </button>
                                   <p className="text-sm text-center text-blue-100 mt-4"> Already have an account? 
                                       <a href="#" className="ml-1 font-medium text-white hover:underline">Login here</a>
                                   </p>
                               </form>
                       </div>
                   </div>
                   <div className="mt-8 text-center"> <p className="text-blue-100 text-sm">&copy; {new Date().getFullYear()} Building Kenya. All rights reserved.</p> </div>
               </div>
           </div>
     )
}
export default RequestPassword