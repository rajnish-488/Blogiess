import "./PostItem.css"

const PostItem = () => {
   return (
      <div className="postitem">
         <img className="postitemImg"
            src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png" alt="" />
         <div className="postitemInfo">
            <div className="postitemCats">
               <span className="postitemcat">MUSIC</span>
               <span className="postitemcat">LIFE</span>
            </div>
            <span className="postitemtitle">Lorem ipsum dolor sit. </span>
            <hr />
            <p className="postitemPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sapiente corporis autem doloremque molestias delectus necessitatibus repellendus recusandae atque nemo nam nisi, eaque quaerat error odio, ipsum, fugiat accusantium in.</p>
            <span className="postitemDate"> 1 hour ago</span>
         </div>

      </div>
   )
}

export default PostItem