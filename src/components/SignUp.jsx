import { useState } from "react";

const Signup = () => {
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword] =useState()
    const [confirm_password,setConfirm_Password]=useState()
    
    function handleUsername(event){setUsername(event.target.value)}
    function handleEmail(event){setEmail(event.target.value)}
    function handlePassword(event){setPassword(event.target.value)}
    function handleConfirmPassword(event){setConfirm_Password(event.target.value)}
    function handleForm(event){
        event.preventDefault()

        if(username.length() < 5){
            console.log("Invalid Username")
        }

        if(password.length()<8){
            console.log()
        }
        if(password != confirm_password){
            console.log("passwords do not match")
        }
        
    }



  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-render-tropical-landscape-with-palm-trees-blue-sea_1048-6386.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-emerald-900/60 backdrop-blur-sm"></div>
      </div>
      
     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
     
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-2">
            <img 
              className="w-10 h-10 mr-2" 
              src="https://imgs.search.brave.com/G6q83e8jpzBwEyz9J3geBeRZIBRkHJ4ZB9zmkaBmMJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2VxdWFsLWhvdXNp/bmctcG5nLWxvZ28v/ZXF1YWwtaG91c2lu/Zy1vcHBvcnR1bml0/eS1sb2dvLXBuZy0x/My5wbmc" 
              alt="Building Kenya logo"
            />
            <h1 className="text-3xl font-bold text-white tracking-wide">
              Building Kenya
            </h1>
          </div>
          <p className="text-blue-100 font-medium">Creating sustainable communities</p>
        </div>
        
        
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/30">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-blue-100 mt-1">Join our community today</p>
            </div>
            
            <form  onSubmit={handleForm} className="space-y-5">
            
              <div>
                
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Username
                </label>
                
                <input
                  value={username}
                  onChange={handleUsername}
                  type="text"
                  id="name"
                  
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-blue-100 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition"
                  placeholder="John Doe"
                  required
                />

              </div>
              
             
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email Address
                </label>
                
                <input
                 value={email}
                 onChange={handleEmail}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-blue-100 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition"
                  placeholder="name@company.com"
                  required
                />
              </div>
              
            
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                  Password
                </label>
                
                <input
                  value={password} onChange={handlePassword}
                  type="password"
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-blue-100 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition"
                  placeholder="••••••••" required
                />
              </div>
              
              
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-1">
                  Confirm Password
                </label>
                
                <input
                  value={confirm_password} onChange={handleConfirmPassword}
                  type="password"
                  className="w-full px-4 py-3 bg-white/20 text-white placeholder-blue-100 border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition"
                  placeholder="••••••••" required
                />
              </div>
              
             
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 text-blue-300 border-white/30 rounded focus:ring-white bg-white/20"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-normal text-blue-100">
                    I accept the <a href="#" className="font-medium text-white hover:underline">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              
            
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500/90 to-emerald-500/90 hover:from-blue-600 hover:to-emerald-600 text-white font-medium rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
              >
                Create Account
              </button>       
              <p className="text-sm text-center text-blue-100 mt-4">
                Already have an account? 
                <a href="#" className="ml-1 font-medium text-white hover:underline">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>  
        <div className="mt-8 text-center">
          <p className="text-blue-100 text-sm">
            &copy; 2025 Building Kenya. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup;