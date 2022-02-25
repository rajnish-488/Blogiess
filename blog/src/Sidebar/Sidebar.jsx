import "./Sidebar.css";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle"> KNOW ABOUT ME </span>
            <img className="sidebarImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1K-YJLGTIwJjolUAtQneTB5H1xXeEBw0TQ&usqp=CAU" alt="" />
            <p className="sidebarText">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste veritatis, ipsa temporibus quo quis minus magni repellat pariatur ad sequi maiores voluptatum quos, aliquid autem et rerum similique perspiciatis dolores?
            </p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle"> Catagories </span>
            <ul className="sidebarList">
               <li className="sidebarListItem">LIFE</li>
               <li className="sidebarListItem">MUSIC</li>
               <li className="sidebarListItem">STYLE</li>
               <li className="sidebarListItem">SPORTS</li>
               <li className="sidebarListItem">TECH</li>
               <li className="sidebarListItem">CINEMA</li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle"> FOLLOW US  </span>
            <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-square"></i>
               <i className="sidebarIcon fab fa-twitter-square"></i>
               <i className="sidebarIcon fab fa-pinterest-square"></i>
               <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
         </div>

      </div>
   )
}

export default Sidebar