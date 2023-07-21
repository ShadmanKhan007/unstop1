import "./rightoverview.css";
import { RiLayoutRowLine } from "react-icons/ri";
import { MdOutlinePeople } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineAttachment } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFilterAlt } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { useState } from "react";

const Rightoverview = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className="rightoverview">
    <p className="heading">Assessments Overview</p>

    <div className="head">
    <p className="head-1">My Assessments</p>
    <p className="head-2">Unstop Assessments</p>
    </div>

    <div className="head-logo">
    <div className="first">
    <p className="head--logo-1">My Assessments</p>
    </div>
    
    <div className="second">
    <p className="head-logo-2"><BiSearchAlt2  /></p>
    <p className="head-logo-2"><MdFilterAlt  /></p>
    <p className="head-logo-2"><BiSolidBarChartAlt2 onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }} /></p>
    </div>
   
    </div>
   

    <div 
    className={
          isNavExpanded ? "main newMain" : "main"
        }>
        
        <div className="overview-1">
           <p className="heading-1">Total Assessment</p>
           <div className="Item">
           <RiLayoutRowLine className="Icon"/>
           <h3 className="number">34</h3>
           </div>
        
        </div>



        <div className="overview-2">
           <p className="heading-1">Candidates</p>

           <div className="Item-2">
           <MdOutlinePeople className="Icon"/>


           <div className="Item-2-1">
           <p className="number-2">11,145<span className="spanItem">+89</span></p>
           <p className="desc">Total Candidate</p>
           </div>

           <div className="Item-2-2">
           <p className="number-2">114<span className="spanItem">+89</span></p>
           <p className="desc"> Who Attempted</p>
           </div>
         
           </div>

        </div>



        <div className="overview-3">
          <p className="heading-1" >Candidates Source</p>

           <div className="Item-3">
           <AiOutlineGlobal className="Icon-3"/>
           
           
           <div className="Item-3-1">
           <p className="number-2"> 11,000<span className="spanItem">+89</span></p>
           <p className="desc">E-mail</p>
           </div>
           
           <div className="Item-3-2">
           <p className="number-2">114<span className="spanItem">+89</span></p>
           <p className="desc">Social Share</p>
           </div>


           <div className="Item-3-3">
           <p className="number-2">114<span className="spanItem">+89</span></p>
           <p className="desc">Unique Link</p>
           </div>
           
          </div>

        </div>



        <div className="overview-4">
         <p className="heading-1" >Total Purpose</p>
           <div className="Item-4">
           <MdOutlineAttachment className="Icon-4"/> <h3 className="number">11</h3>
           </div>
        </div>

    </div>

    </div>
  )
}

export default Rightoverview