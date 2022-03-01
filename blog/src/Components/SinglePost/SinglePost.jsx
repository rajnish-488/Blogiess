import './SinglePost.css';

const SinglePost = () => {
   return (
      <div className='singlepost'>
         <div className="singlepostwrapper">
            <img className='singlePostImg' src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png" alt="" />
            <h1 className="singlePostTitle">
               Lorem ipsum dolor sit amet.
               <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit"></i>
                  <i className=" singlePostIcon far fa-trash-alt"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className='singlePostAuthor'> Author : <b>USERNAME</b></span>
               <span className="singlePostDate"> 1hour ago</span>
            </div>
            <p className='singlePostDesc'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit facere distinctio voluptatem aperiam assumenda neque quisquam eius. Assumenda sapiente animi beatae hic eligendi placeat alias nam cumque atque facere?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nesciunt eum at repellendus odio dolorem provident, illo culpa ullam. Obcaecati aut repellat quibusdam consequatur provident rerum alias eligendi iste est?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eligendi ab ipsa aspernatur nihil quidem culpa commodi atque reprehenderit. Odio, suscipit. Necessitatibus temporibus praesentium, facilis sint ex aperiam ducimu Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rerum porro modi provident, nihil doloremque necessitatibus nisi sequi atque perspiciatis amet perferendis. Tempore inventore esse assumenda doloribus commodi culpa sunt?
            </p>
         </div>
      </div>
   )
}

export default SinglePost