import "./Sidebar.css";
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";
import axios from 'axios';

const Sidebar = () => {
   const [Cat, setCat] = useState([]);

   useEffect(() => {
      const getCat = async () => {
         const res = await axios.get("http://localhost:5000/api/catagory");
         setCat(res.data);
      }
      getCat();
   }, [])

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
               {
                  Cat.map((c) => (
                     <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItemqwer">{c.name}</li>
                     </Link>

                  ))
               }

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