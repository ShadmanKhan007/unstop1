import "./myassessment.css";
import { BiPlus } from "react-icons/bi";
import { PiBriefcaseLight} from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { ImAttachment } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useState } from 'react';

const Popupp = () => {
  const [isVisible, setVisible] = useState(true);



    const handleClosePopup = () => {
      setVisible(false);
    };
  
  return (
    <> 
  
  <div className="Popuppage">


{isVisible && (
        <form className="assessment-form">
  <h1>Create new assessment</h1>
  <GrFormClose className="close"  onClick={handleClosePopup} />
  <label >Name of assessment</label>
  <input type="text" id="assessment-name" name="assessment-name" required placeholder="Type Here" />

  <label>Purpose of the test is</label>
  <select id="assessment-purpose" name="assessment-purpose" required>
    <option value="" disabled selected>Select</option>
    <option value="Skill Evaluation">Skill Evaluation</option>
    <option value="Knowledge Assessment">Knowledge Assessment</option>
    <option value="Training Feedback">Training Feedback</option>

  </select>

  <label>Description</label>
  <select id="assessment-description" name="assessment-description" required>
    <option value="" disabled selected>Select</option>
    <option value="Assessing UI/UX and Design skills">Assessing UI/UX and Design skills</option>
    <option value="Evaluating Web Development proficiency">Evaluating Web Development proficiency</option>
  
  </select>

  <label>Skills</label>
  <div className="skills">

  <div className="skillsdata">
      <p>UI/UX and Design<GrFormClose className="close-2" /></p>
      <p>No of Question <GrFormClose className="close-2" /></p>
      <p>Web Development <GrFormClose className="close-2" /></p>
      <p>UI/UX and Design <GrFormClose className="close-2" /></p>
      <p>Web Development <GrFormClose className="close-2" /></p>    
  </div>  


   <div className="skillssearch">
      <input type="number" id="assessment-num-questions" name="assessment-num-questions" required placeholder="Type Here" />
   </div>
 
  </div>


   <div className="duration">
      <label>Duration of assessment</label>
      <input type="text" id="assessment-duration" name="assessment-duration" placeholder="HH:MM:SS" required />
   </div>


  <button type="submit">Save</button>
 </form>

)}

{!isVisible && <MyAssessment />}




  </div>

    </>
  )
}














// ===================================================ASSESSMENT====================================================
// ===================================================ASSESSMENT====================================================

const MyAssessment = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handleShowPopup = () => {
    setPopupVisible(false);


   
  };


  return (
    <div>
    {isPopupVisible && (
    <div className="Myassessment">
  
    
    <p className="heading">My Assessment</p>
 
  
    <div className="main-1">

      <div className="newAssessment"> 
       <BiPlus className="main-1-Icon"  onClick={handleShowPopup}/>
       <h3 className="main-1-head">New Assessment</h3>
        <p className="main-1-para">From here you can add questions of multiple type like MCQs, subjective (text or paragraph)!</p>
      </div>

      

      <div className="myAssessment">
      <PiBriefcaseLight className="myAssessment-logo"/>
      <BsThreeDotsVertical className="myAssessment-logo-2"/>
      <div className="myAssessment-1">
        <h2 className="myAssessment-head">Math Assessment</h2>

        <div className="data">
        <h5 className="myAssessment-detail">Job</h5>
        <span><SlCalender className="calender"/></span> 
        <p className="date">20 Apr 2023</p>
        </div>


        <div className="detail">

        <div className="detail-1">
        <p>00</p>
        <p>Duration</p>
        </div>

        <div className="detail-2">
        <p>00</p>
        <p>Questions</p>
        </div>

        <div className="detail-3">
        <p className="attachfile"><ImAttachment />share</p>
         <p className="tag">LP</p>
        </div>
       

        </div>
       
      </div>
      </div>





      {/* -------------------------------------------------------{second assessment--------------------------------------------------------------------} */}


      <div className="myAssessment">
      <PiBriefcaseLight className="myAssessment-logo"/>
      <BsThreeDotsVertical className="myAssessment-logo-2"/>
      <div className="myAssessment-1">
        <h2 className="myAssessment-head">Math Assessment</h2>

        <div className="data">
        <h5 className="myAssessment-detail">Job</h5>
        <span><SlCalender className="calender"/></span> 
        <p className="date">20 Apr 2023</p>
        </div>


        <div className="detail">

        <div className="detail-1">
        <p>00</p>
        <p>Duration</p>
        </div>

        <div className="detail-2">
        <p>00</p>
        <p>Questions</p>
        </div>

        <div className="detail-3">
        <p className="attachfile"><ImAttachment />share</p>
         <p className="tag">LP</p>
        </div>
       

        </div>
       
      </div>
      </div>

    </div>
  


   
    </div>
    )}
    {!isPopupVisible && <Popupp className="pop"/>}
    </div>
  )
}

export default MyAssessment;