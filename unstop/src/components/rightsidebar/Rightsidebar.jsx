import "./rightsidebar.css";
import Navbar from './../navbar/Navbar';
import Rightoverview from './../rightoverview/Rightoverview';
import MyAssessment from './../myassessment/MyAssessment';

const Rightsidebar = () => {
  return (
    <div className="rightsidebar">
      <Navbar />
      <Rightoverview />
      <MyAssessment />
    </div>
  )
}

export default Rightsidebar