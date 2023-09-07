import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassForm = () =>{
    const [formData, setFormData] = useState({email : ""})
    const navigate= useNavigate();

    function changeHandler(e){
        setFormData((prevFormData) =>({
            ...prevFormData,
            [e.target.name]:e.target.value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        navigate('/changepass');
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>
                     <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
                        Enter Email Address <sup className="text-pink-200">*</sup>
                     </p>

                     <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder="Enter your Email address"
                        className="w-full bg-richblack-800 mt-3 p-[12px] rounded-[0.5rem] text-richblack-700 border-b"/>
                </label>

                <button className="rounded-[8px] text-center bg-yellow-50 font-medium w-full px-[12px] py-[8px] mt-6">
                    Next
                </button>
            </form>
        </div>
    );
}

export default ForgotPassForm;