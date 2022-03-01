import "./Write.css"

export default function Write() {
   return (
      <div className='write'>
         <img className="writeImg" src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png" alt="" />
         <form className="writeForm">
            <div className="writeFormGroup">
               <label htmlFor="fileInput">
                  <i className=" writeIcon fas fa-plus"></i>
               </label>
               <input type="file" id="fileInput" style={{ display: "none" }} />
               <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
               <textarea placeholder="what you want to say........." type="text" className="writeInput writeText">

               </textarea>
               <button className="writeSubmit">Post it</button>
            </div>
         </form>
      </div>
   )
}
