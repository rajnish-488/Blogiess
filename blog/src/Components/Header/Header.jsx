import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
   const user = false;
   return (
      <div className='header'>
         <div className='topleft'>
            <i className="topimage fa-brands fa-hashnode"></i>
            <div className='logotitle'>HASHBLOG</div>
         </div>
         <div className='topcenter'>
            <ul className='centeritemlist'>
               <li className='centeritem'>
                  <Link to="/" className='link'>HOME</Link>
               </li>
               <li className='centeritem'><Link to="/" className='link'>ABOUT</Link></li>
               <li className='centeritem'><Link to="/" className='link'>CONTACT</Link></li>
               <li className='centeritem'><Link to="/write" className='link'>WRITE</Link></li>
               <li className='centeritem'><Link to="/" className='link'>
                  {user && "LOGOUT"}
               </Link></li>
            </ul>

         </div>
         <div className='topright'>
            {
               user ? (<img className='rightimage'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSyb2E8WLINckZtc083LBatl12iFBLMi5zA&usqp=CAU" alt="" />) : (<ul className='centeritemlist'><li className='centeritem'>
                     <Link to="/login" className='link'>LOGIN</Link>
                  </li>
                     <li className='centeritem'>
                        <Link to="/register" className='link'>Register</Link>
                     </li></ul>)
            }




            <i className="righticon fa-brands fa-searchengin"></i>
         </div>
      </div>
   )
}

export default Header