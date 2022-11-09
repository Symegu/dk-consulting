import {Route, Routes} from "react-router";
import {MainPage} from "./pages/Mainpage";
import {About} from "./pages/About";
import {Info} from "./pages/Info";
import {Services} from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
   <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />}></Route>
   </Routes>
  );
}

export default App;
