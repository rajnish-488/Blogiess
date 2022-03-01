import './Single.css';
import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from '../../Components/SinglePost/SinglePost';

const Single = () => {
   return (
      <div className='single'>
         {/*post*/}
         <SinglePost />
         <Sidebar />
      </div>
   )
}

export default Single