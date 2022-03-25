import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {

   const userRef = useRef();
   const passwordRef = useRef();
   const { user, dispatch, isFetching } = useContext(Context)

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
         const res = axios.post("/api/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
         })
         dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      } catch (err) {
         dispatch({ type: "LOGIN_FAILURE" });
      }
   }
   console.log(user);
   return (
      <div className="login">
         <span className="loginTitle">Login to HASHBLOG</span>
         <form action="" className="loginForm" onSubmit={handleSubmit}>


            <label>USERNAME</label>
            <input type="text" className='loginInput' placeholder="enter your USERNAME..."
               ref={userRef}
            />
            <label>PASSWORD</label>
            <input type="text" className='loginInput' placeholder="enter your Password..."
               ref={passwordRef}
            />

            <button className="loginButton" type="submit">Login</button>
         </form>

         <button className="loginRegistration">
            <Link to="/register" className='link'>Register</Link>
         </button>
      </div>
   )
}

export default Login