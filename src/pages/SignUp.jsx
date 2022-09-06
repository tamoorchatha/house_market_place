import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp(){
    const [showpassword, setShowpassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const {name, email, password} = formData;
    const navigate = useNavigate();

    const Onchange = (e)=>{
            setFormData((prevState)=>(
        
                {
                    ...prevState,
                    [e.target.id]: e.target.value,
                }
        
            
            ))
    };
    

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Welcome Back!
                    </p>
                </header>

                <form>

                    <input type="text" className="nameInput" placeholder="name" id="name" value={name} onChange={onchange} />


                    <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onchange} />

                    <div className="passwordInputDiv">
                        <input type={showpassword ? 'text' : "password"} className="passwordInput" id="password" placeholder="password" value={password} onChange={onchange} />
                        <img src={visibilityIcon} alt="show password" className="showPassword" onClick={()=>{
                            return setShowpassword((preState)=>{
                                return !preState;
                            })
                        }} />
                    </div>

                    <Link to="/forgot-password"
                    className="forgotPasswordLink">
                        Forgot Password
                    </Link>

                    <div className="signUpBar">
                        <p className="signUpText">
                            Sign Up
                        </p>
                        <button className="signUpButton">
                            <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
                        </button>
                    </div>
                </form>

                {/* Google Oauth */}

                <Link to="/sign-in" className="registerLink">
                    Sign In Instead
                </Link>
            </div>
        </>
    )
}

export default SignUp