import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleLogin(){
        if(email.trim() === ""){
            alert("Enter email")
        }
        else if(!email.endsWith("@gmail.com")){
            alert("Enter valid email")
        }
        else if(password === ""){
            alert("Enter password")
        }
        else{
            console.log(email);
            console.log(password);
            navigate("/dashboard");
        }      
    }
    return(
        <div className="login-container">
            <h3>Log in to continue</h3>
            <div className="input-group">
                <input
                type ="email" placeholder ="Email" value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <FaEnvelope className="icon"/>
            </div>
            <div className="input-group">
                <input 
                type={showPassword ?"text":"password"} placeholder ="Password" value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                {showPassword ?( <FaEyeSlash className="show-icon" onClick={()=>setShowPassword(false)} />
                ):( <FaEye className="show-icon" onClick={()=>setShowPassword(true)} />
                )}
            </div>
            <button onClick={handleLogin}>Log In</button>
            <p className="signup-text">Don't have an account? <span className="signup" onClick={()=> navigate("/register")}>Sign up</span></p>
        </div>   
    );
}
export default Login;