import "./Home.css";
import Leftsidebar from "../../components/leftsidebar/Leftsidebar"
import Rightsidebar from "../../components/rightsidebar/Rightsidebar"

const Home = () => {
  return (
    <div className="container">
         <div className="leftsidebar">
             <Leftsidebar  />
         </div>


         <div className="rightsidebar">
          <Rightsidebar />
         </div>
    </div>
  )
}

export default Home