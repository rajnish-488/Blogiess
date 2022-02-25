import React from 'react'
import "./Home.css";
import HeaderHome from "../../HeaderHome/HeaderHome";
import Post from '../../Post/Post';
import Sidebar from '../../Sidebar/Sidebar';

const Home = () => {
   return (
      <div>
         <HeaderHome />
         <div className="home">
            <Post />
            <Sidebar />
         </div>
      </div>
   )
}

export default Home