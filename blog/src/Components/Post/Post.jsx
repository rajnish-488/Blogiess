import PostItem from "../PostItem/PostItem";
import "./Post.css";

const Post = ({ posts }) => {
   return (
      <div className="post">

         {
            posts.map((p) => (
               <PostItem post={p} />
            ))
         }

      </div>
   )
}

export default Post