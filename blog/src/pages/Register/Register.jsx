import "./Rgister.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [email, setEmail] = useState("")
   const [error, setError] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(false);
      try {
         const res = await axios.post("api/auth/register", {
            username,
            email,
            password,
         });
         res.data && window.location.replace("./login")
      } catch (err) {
         setError(true)
      }
      // console.log(res)
   }

   return (
      <div className="register">
         <span className="registerTitle">Register to HASHBLOG</span>
         <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label>USERNAME</label>
            <input type="text" className='registerInput' placeholder="enter your UserName..."
               onChange={e => setUsername(e.target.value)}
            />

            <label>EMAIL</label>
            <input type="text" className='registerInput' placeholder="enter your email..."
               onChange={e => setEmail(e.target.value)}
            />
            <label>PASSWORD</label>
            <input type="text" className='registerInput' placeholder="enter your Password..."
               onChange={e => setPassword(e.target.value)}
            />

            <button className="registerButton" type="submit">Register</button>
         </form>

         <button className="registerRegistration">
            <Link to="/login" className='link'>Login</Link>
         </button>
         {error && <span style={{ color: "red", marginTop: "10px" }}>Something went Wrong! Try changing username and email.</span>}
      </div>
   )
}
