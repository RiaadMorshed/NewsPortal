import Slide from "./components/Slide/Slide";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import User from "./components/Admin/User"
import './index.css';
import AddNews from "./components/Admin/AddNews";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slide></Slide>
      <div>
      
      </div>
      <div className="md:container md:mx-auto main">
        <div className="left"><News></News></div>
        <div className="right"><Sidebar></Sidebar></div>
      </div>
      <User></User>
      <hr></hr> <br></br>
      <AddNews></AddNews>
      <br></br> <br></br>
    </div>
  );
}

export default App;
