import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const LoginForm = ({setLoggedIn}) =>{

    const [formData , setFormData]= useState({email : '', password :''})
    const [showPassword, setShowPassword]= useState(false)
    const navigate= useNavigate();

    function changeHandler(e){

        setFormData(prevFormData =>({
            ...prevFormData,
            [e.target.name] : e.target.value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        setLoggedIn(true)
        toast.success('Logged In');
        navigate('/dashboard');
    }
    return(
        <form onSubmit={submitHandler} className="flex flex-col gap-y-6 mt-6 w-full">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>

                <input 
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder="Enter Your Email Address"
                    className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 border-b"/>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>

                <input 
                    required
                    type={showPassword ? ('text') : ('password')}
                    name="password"
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder="Enter your password"
                    className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 border-b"/>

                <span onClick={() => setShowPassword((prev) => !prev)} 
                 className="text-richblack-700 absolute right-3 top-[45px] cursor-pointer">
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
                
                <Link to='/forgotpass'>
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto cursor-pointer">
                        Forgot Password
                    </p>
                </Link>
            </label>
            <button className="rounded-[8px] text-center bg-yellow-50 font-medium w-full px-[12px] py-[8px] mt-6 ">Log In</button>
        </form>
    );
}

export default LoginForm