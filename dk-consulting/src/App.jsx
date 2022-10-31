import "style/style.css";
import {Route} from "react-router";

function App() {
  return (
   <>
     <Route path="/" element={<Mainpage />}></Route>
     <Route path="/info" element={<Info />}></Route>
     <Route path="/services" element={<Services />}></Route>
     <Route path="/about" element={<About />}></Route>
   </>
  );
}

export default App;
