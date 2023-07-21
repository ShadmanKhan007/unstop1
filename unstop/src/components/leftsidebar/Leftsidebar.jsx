import "./leftsidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";

const Leftsidebar = () => {
  return (
    <div className="leftsidebar">

    <div className="items">
      <MdOutlineDashboard className="logo" />
       Dashboard
    </div>

    <div className="items-2">
      <PiNotePencil className="logo" />
         Assessment
    </div>

    <div className="items-3">
      <MdOutlineLibraryAddCheck className="logo" />
       MyLibrary
    </div>

    <div className="items-4">
      <p>Admin</p>
      <RiAttachment2 className="logo-4" />
      Round <br />Status
     
    </div>
   
        
    </div>
  )
}

export default Leftsidebar;