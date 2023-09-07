import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setLoggedIn}) =>{
    const [formData, setFormData]= useState({firstName : '', lastName : '', email : '', password : '', confirmPassword : ''});
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const navigate= useNavigate();

    const[accountType, setAccountType] = useState('student')

    function changeHandler(e){
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name] : e.target.value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password !== formData.confirmPassword)
        {
            toast.error('Passords do not match');
            return;
        }

        setLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData ={
            ...accountData,
            accountType
        }
        console.log("printing account data ");
        console.log(finalData);

        navigate("/dashboard");
    }
    return(
        <div>
            <div className="rounded-full bg-richblack-800 p-1 gap-x-1 flex  max-w-max my-6">
                <button className={`${accountType === 'student' ?
                "bg-richblack-900 text-richblack-5": "bg-transarent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} 
                onClick={() => setAccountType('student')}>
                    Student
                </button>

                <button className={`${accountType === 'instructor' ?
                "bg-richblack-900 text-richblack-5": "bg-transarent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} 
                onClick={() => setAccountType('instructor')}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex justify-between mb-3">
                    <label>
                        <p  className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                            First Name <sup className="text-pink-200">*</sup>
                        </p>

                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter your First Name"
                            value={formData.firstName} 
                            className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 "/>
                    </label>

                    <label>
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                            Last Name <sup className="text-pink-200">*</sup>
                        </p>

                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter your Last Name"
                            value={formData.lastName} 
                            className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 "/>
                    </label>
 
                </div>
               
                <label className="w-full">
                    <p  className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                        Email Address <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter your Email Address"
                        value={formData.email} 
                        className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 "/>
                </label>

                <div className="flex justify-between mt-3">
                    <label className="relative">
                        <p  className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                            Enter Password <sup className="text-pink-200">*</sup>
                        </p>

                        <input 
                            required
                            type={showPassword ? ('text') : ('password')}
                            name="password"
                            onChange={changeHandler}
                            value={formData.password}
                            placeholder="Enter password"
                            className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 "/>

                        <span onClick={() => setShowPassword((prev) => !prev)} 
                        className="text-richblack-700 absolute right-3 top-[45px] cursor-pointer">
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>

                    <label className="relative">
                        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                            Confirm Password <sup className="text-pink-200">*</sup>
                        </p>

                        <input 
                            required
                            type={showCPassword ? ('text') : ('password')}
                            name="confirmPassword"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            placeholder="Confirm password"
                            className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700"/>

                        <span onClick={() => setShowCPassword((prev) => !prev)}
                        className="text-richblack-700 absolute right-3 top-[45px] cursor-pointer">
                            {showCPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>
                </div>

            <button className="rounded-[8px] text-center bg-yellow-50 font-medium w-full px-[12px] py-[8px] mt-6 ">
                Create Account
            </button>
            </form>
        </div>
    );
}

export default SignupForm