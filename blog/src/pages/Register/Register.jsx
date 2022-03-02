import "./Rgister.css";

export const Register = () => {
   return (
      <div className="register">
         <span className="registerTitle">Register to HASHBLOG</span>
         <form action="" className="registerForm">
            <label>USERNAME</label>
            <input type="text" className='registerInput' placeholder="enter your UserName..." />

            <label>EMAIL</label>
            <input type="text" className='registerInput' placeholder="enter your email..." />
            <label>PASSWORD</label>
            <input type="text" className='registerInput' placeholder="enter your Password..." />

            <button className="registerButton">Register</button>
         </form>

         <button className="registerRegistration">Login</button>
      </div>
   )
}
