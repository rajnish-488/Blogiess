import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className="login">
         <span className="loginTitle">Login to HASHBLOG</span>
         <form action="" className="loginForm">


            <label>EMAIL</label>
            <input type="text" className='loginInput' placeholder="enter your email..." />
            <label>PASSWORD</label>
            <input type="text" className='loginInput' placeholder="enter your Password..." />

            <button className="loginButton">Login</button>
         </form>

         <button className="loginRegistration">
            <Link to="/register" className='link'>Register</Link>
         </button>
      </div>
   )
}

export default Login