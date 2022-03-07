import './SinglePost.css';
import { useLocation } from "react-router";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SinglePost = () => {
   const [post, setPost] = useState({});
   const location = useLocation();
   const path = location.pathname.split('/')[2];

   useEffect(() => {
      const getPost = async () => {
         const res = await axios.get("http://localhost:5000/api/posts/" + path);
         //console.log(res.data);
         setPost(res.data);
      }
      getPost();
   }, [path])
   return (
      <div className='singlepost'>
         <div className="singlepostwrapper">
            {post.photo ? (
               <img className='singlePostImg' src={post.photo} alt="" />
            ) : (
               <img className='singlePostImg' src="https://salautomotive.in/wp-content/uploads/2017/01/no-image-available.jpg" alt="" />
            )}

            <h1 className="singlePostTitle">
               {post.title}
               <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className=" singlePostIcon far fa-trash-alt"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className='singlePostAuthor'> Author :
                  <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link>

               </span>
               <span className="singlePostDate"> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>
               {post.desc}
            </p>
         </div>
      </div>
   )
}

export default SinglePost