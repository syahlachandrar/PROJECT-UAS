import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Top from './components/Navbar'
import Mainconten from "./pages/Mainconten";
// import Cardservice from "./components/Cardservice";
import About from "./pages/About"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPass from "./pages/ForgetPass";
import History from "./pages/history";
import Loginadmin from "./pages/Loginadmin";
import Detail from "./pages/detail";
import Booking from "./pages/booking";
import MainAdmin from "./pages/MaincontentAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainconten/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginadmin" element={<Loginadmin />} />
          <Route path="/forget-password" element={<ForgetPass />} />
          <Route path="/about" element={<About />}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/mainadmin" element={<MainAdmin/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
