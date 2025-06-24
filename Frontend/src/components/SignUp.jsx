import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiChevronDown, FiBriefcase, FiPhone } from "react-icons/fi";
import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleUsername = (event) => setUsername(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleConfirmPassword = (event) => setConfirmPassword(event.target.value);
    const handleRole = (event) => setRole(event.target.value);
    const handlePhoneNumber = (event) => setPhoneNumber(event.target.value)
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    const handleForm = (event) => {
        event.preventDefault();
        if (username.length < 5) {
            console.log("Username must be at least 5 characters");
            return;
        }
        if (password.length < 8) {
            console.log("Password must be at least 8 characters");
            return;
        }
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        if (!role) {
            console.log("Please select a role");
            return;
        }
        console.log("Form submitted successfully");
    };


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
                        <form onSubmit={handleForm} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Username </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiUser className="w-5 h-5 text-blue-200" /> </div>
                                    <input value={username} onChange={handleUsername} type="text" className="w-full pl-10 pr-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="Full name" required />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiMail className="w-5 h-5 text-blue-200" /> </div>
                                    <input  value={email} onChange={handleEmail} type="email" className="w-full pl-10 pr-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="name@gmail.com" required/>
                                </div>
                            </div>
          
                           <div>
                                <label htmlFor="phone-number" className="block text-sm font-medium text-white mb-1">Phone Number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiPhone className="w-5 h-5 text-blue-200" /> </div>
                                    <input  value={phoneNumber} onChange={handlePhoneNumber} type="tel" className="w-full pl-10 pr-4 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="+2457********" required/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiLock className="w-5 h-5 text-blue-200" /> </div>
                                    <input value={password} onChange={handlePassword} type={showPassword ? "text" : "password"} className="w-full pl-10 pr-10 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="••••••••" required/>
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={togglePasswordVisibility} >
                                        {showPassword ? ( <FiEyeOff className="w-5 h-5 text-blue-200 hover:text-white" />  ) : ( <FiEye className="w-5 h-5 text-blue-200 hover:text-white" /> )}
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-1"> Confirm Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><FiLock className="w-5 h-5 text-blue-200" /></div>
                                    <input value={confirmPassword} onChange={handleConfirmPassword} type={showConfirmPassword ? "text" : "password"}  className="w-full pl-10 pr-10 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"  placeholder="••••••••" required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3"onClick={toggleConfirmPasswordVisibility} >
                                        {showConfirmPassword ? ( <FiEyeOff className="w-5 h-5 text-blue-200 hover:text-white" />
                                        ) : ( <FiEye className="w-5 h-5 text-blue-200 hover:text-white" /> )}
                                    </button>
                                </div>
                            </div>
                            
                           <div>
                                <label htmlFor="role" className="block text-sm font-medium text-white mb-1"> Select Role </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <FiBriefcase className="w-5 h-5 text-blue-200" /></div>
                                    <select value={role} onChange={handleRole} className="w-full pl-10 pr-10 py-3 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none" required>
                                    <option value="" disabled className="bg-blue-500 ">Select your role</option>
                                    <option value="SUPPLY_MANAGER" className="bg-blue-500 ">Supply Manager</option>
                                    <option value="PROJECTS_MANAGER" className="bg-blue-500 ">Projects Manager</option>
                                    <option value="FINANCE_MANAGER" className="bg-blue-500 ">Finance Manager</option>
                                    <option value="HUMAN_RESOURCE_MANAGER" className="bg-blue-500 ">Human Resource Manager</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"> <FiChevronDown className="w-5 h-5 text-blue-200" /></div>
                                </div>
                            </div>
                            
                            <button type="submit" className={`w-full py-3 px-4 text-white font-bold rounded-lg shadow-xl transition-all duration-300 transform ${isHovered ? 'bg-blue-600 scale-105 shadow-2xl': 'bg-gradient-to-r from-blue-500 to-emerald-500 scale-100' }`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
    );
}

export default Signup;