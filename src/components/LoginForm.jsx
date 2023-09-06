import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>

                <input 
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder="Enter your Email Address"/>
            </label>

            <label>
                <p>
                    Password <sup>*</sup>
                </p>

                <input 
                    required
                    type={showPassword ? ('text') : ('password')}
                    name="password"
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder="Enter your password"/>

                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>
            <button>Log In</button>
        </form>
    );
}

export default LoginForm