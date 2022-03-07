import React, { useEffect, useState } from 'react'
import "./Home.css";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import Post from '../../Components/Post/Post';
import Sidebar from '../../Components/Sidebar/Sidebar';
import axios from "axios";
import { useLocation } from 'react-router';

const Home = () => {
   const [posts, setPosts] = useState([]);
   const { search } = useLocation();
   useEffect(() => {
      const fetchPosts = async () => {
         const res = await axios.get("api/posts" + search);
         setPosts(res.data);
      }
      fetchPosts();
   }, [search])
   return (
      <div>
         <HeaderHome />
         <div className="home">
            <Post posts={posts} />
            <Sidebar />
         </div>
      </div>
   )
}

export default Home