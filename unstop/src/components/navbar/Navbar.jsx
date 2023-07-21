import "./navbar.css";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";

const Navbar = () => {
 const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (

    <nav className="navigation">

      <a href="/" className="brand-name">
      Assessment
      </a>

      <a href="/" className="brand-name-1">
       My Assessments
      </a>

      <button className="hamburger"  onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>


      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        
        <ul>

          <li>
            <div className="list">
            <MdOutlineDashboard />
              Dashboard
            </div> 
          </li>


          <li>
          <div className="list">
            <PiNotePencil />
              Assessment
            </div> 
          </li>

          <li>
          <div className="list-1">
          <MdOutlineLibraryAddCheck />
                MyLibrary
            </div> 
          </li>




 <li className="line">


 </li>


          <li>
            <div className="list-2">
            <RiAttachment2 className="logo" />
               Round Status
               <p className="Admin">Admin</p>
           </div> 
          </li>
        



        </ul>
      </div>
    </nav>
   
  )
}

export default Navbar;