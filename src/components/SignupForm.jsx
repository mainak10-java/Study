import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setLoggedIn}) =>{
    const [formData, setFormData]= useState({firstName : '', lastName : '', email : '', password : '', confirmPassword : ''});
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const navigate= useNavigate();

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
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");
    }
    return(
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <label>
                    <p>
                        First Name <sup>*</sup>
                    </p>

                    <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter your First Name"
                        value={formData.firstName} />
                </label>

                <label>
                    <p>
                        Last Name <sup>*</sup>
                    </p>

                    <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter your Last Name"
                        value={formData.lastName} />
                </label>

                <label>
                    <p>
                        Email Address <sup>*</sup>
                    </p>

                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter your Email Address"
                        value={formData.email} />
                </label>

                <label>
                <p>
                    Enter Password <sup>*</sup>
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

            <label>
                <p>
                    Confirm Password <sup>*</sup>
                </p>

                <input 
                    required
                    type={showCPassword ? ('text') : ('password')}
                    name="confirmPassword"
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                    placeholder="Confirm your password"/>

                <span onClick={() => setShowCPassword((prev) => !prev)}>
                    {showCPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>

            <button>
                Sign In
            </button>
            </form>
        </div>
    );
}

export default SignupForm