import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { FaEnvelope,FaEye ,FaEyeSlash} from "react-icons/fa";
import "./Register.css";
function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleRegister(){
        if(email.trim() === ""){
            alert("Enter email")
        }
        else if(!email.endsWith("@gmail.com")){
            alert("Enter valid email")
        }
        else if(password.trim() === ""){
            alert("Enter password")
        }
        else if(confirmPassword.trim() === ""){
            alert("Confirm your password");
        }
        else if(password !== confirmPassword){
            alert("Passwords do not match");
        }
        else{
            console.log(email);
            console.log(password);
            alert("Registration successful");
            navigate("/");
        }      
    }
    return(
        <div className="register-container">
            <h3>Sign Up</h3>
            <div className="input-group">
                <input
                type ="email" placeholder ="Email" value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <FaEnvelope className="icon"/>
            </div>
            <div className="input-group">
                <input 
                type={showPassword ?"text":"password"} placeholder ="Set Password" value={password}
                onChange={(e)=> setPassword(e.target.value)} />
                {showPassword ?( <FaEyeSlash className="show-icon" onClick={()=>setShowPassword(false)} />
                ):( <FaEye className="show-icon" onClick={()=>setShowPassword(true)} />
                )}
            </div>
            <div className="input-group">
                <input 
                type={showPassword ?"text" :"password"} placeholder ="Confirm Password" value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={handleRegister}>Sign Up</button>
            <p className="login-text">Already have account? <span className="login-link" onClick={()=> navigate("/")}>Log in</span></p>
        </div>   
    );
}
export default Register;