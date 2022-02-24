import './Header.css';

const Header = () => {
   return (
      <div className='header'>
         <div className='topleft'>
            <i className="topimage fa-brands fa-hashnode"></i>
            <div className='logotitle'>HASHBLOG</div>
         </div>
         <div className='topcenter'>
            <ul className='centeritemlist'>
               <li className='centeritem'>HOME</li>
               <li className='centeritem'>ABOUT</li>
               <li className='centeritem'>CONTACT</li>
               <li className='centeritem'>WRITE</li>
               <li className='centeritem'>LOGOUT</li>
            </ul>

         </div>
         <div className='topright'>
            <img className='rightimage'
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSyb2E8WLINckZtc083LBatl12iFBLMi5zA&usqp=CAU" alt="" />
            <i className="righticon fa-brands fa-searchengin"></i>
         </div>
      </div>
   )
}

export default Header