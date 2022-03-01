import React from 'react'
import "./Home.css";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import Post from '../../Components/Post/Post';
import Sidebar from '../../Components/Sidebar/Sidebar';

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