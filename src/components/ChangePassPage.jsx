
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ChangePassPage = () =>{
    const [formData, setFormData]= useState({password : '', confirmPassword : ''});
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const navigate= useNavigate();

    function changeHandler(e){
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name] : e.target.value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password.length < 8 && formData.confirmPassword.length < 8){
            toast.error('Create a password with a length of eight or more')
            return;
        }
        if(formData.password !== formData.confirmPassword)
        {
            toast.error('Passords do not match');
            return;
        }
        toast.success("Password Successfully Changed");

        const finalData ={
            ...formData
        }
        console.log("Password changed and account data updated");
        console.log(finalData);
        navigate("/login");
    }
    return(
        <div>
            <div className="flex flex-col">
                <form onSubmit={submitHandler}>
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
                            className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 border-b"/>

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
                            className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 border-b"/>

                        <span onClick={() => setShowCPassword((prev) => !prev)}
                        className="text-richblack-700 absolute right-3 top-[80px] cursor-pointer">
                            {showCPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </label>

                    <button className="rounded-[8px] text-center bg-yellow-50 font-medium w-full px-[12px] py-[8px] mt-6 ">
                        Change Password
                    </button>
                 </form>
            </div>
        </div>
    );
}

export default ChangePassPage;