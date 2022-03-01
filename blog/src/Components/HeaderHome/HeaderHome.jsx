import React from 'react';
import "./HeaderHome.css";

const HeaderHome = () => {
   return (
      <div>
         <div className='headerhome'>
            <div className="headertitles">
               <span className='headertitlesmall'>WELCOME TO HASHBLOGS</span>
               <span className='headertitlelarge'>BLOGGIES</span>
            </div>
         </div>
         <img className='headerimagehome' src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg" alt="" />
      </div>
   )
}

export default HeaderHome