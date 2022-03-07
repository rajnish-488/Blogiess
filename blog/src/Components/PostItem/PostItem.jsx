import "./PostItem.css"
import { Link } from 'react-router-dom';
const PostItem = ({ post }) => {
   return (

      <div className="postitem">
         {post.photo ? (
            <img className='singlePostImg' src={post.photo} alt="" />
         ) : (
            <img className='singlePostImg' src="https://salautomotive.in/wp-content/uploads/2017/01/no-image-available.jpg" alt="" />
         )}
         <div className="postitemInfo">
            <div className="postitemCats">
               <span className="postitemcat">MUSIC</span>
               <span className="postitemcat">LIFE</span>
            </div>
            <Link to={`/post/${post._id}`} className="link">
               <span className="postitemtitle">{post.title} </span>
            </Link>

            <hr />
            <p className="postitemPara">{post.desc}</p>
            <span className="postitemDate"> {new Date(post.createdAt).toDateString()}</span>
         </div>

      </div>
   )
}

export default PostItem