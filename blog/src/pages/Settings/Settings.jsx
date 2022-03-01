import React from 'react'
import "./Settings.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Settings = () => {
   return (
      <div className='settings'>
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update Your Account</span>
               <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className='settingsForm'>
               <label>Pogile pictures</label>
               <div className="settingsPP">
                  <img className='settingsImg'
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSyb2E8WLINckZtc083LBatl12iFBLMi5zA&usqp=CAU" alt="" />
                  <label htmlFor='fileInput'>
                     <i className='far fa-user-circle settingsPPIcon'></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} />
               </div>
               <label>UserName</label>
               <input type="text" placeholder='rajnish' />
               <label>EMAIL</label>
               <input type="text" placeholder='rajnish@gmail.com' />
               <label>PASSWORD</label>
               <input type="password" />
               <div className="settingSub">
                  <button className='settingsSubmit'>Submit</button>
               </div>

            </form>

         </div>
         <Sidebar />
      </div>
   )
}

export default Settings