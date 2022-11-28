import {Route, Routes} from "react-router";
import {MainPage} from "./pages/Mainpage";
import {About} from "./pages/About";
import {Info} from "./pages/Info";
import {Services} from "./pages/Services";
import { Privacy } from "./pages/Privacy";
import { useEffect } from "react";
import { useState } from "react";
import http from "./http";
import PasswordReset from "./pages/PasswordReset";

function App() {

  //localStorage.clear()

  return (
   <Routes>
        <Route path="/" element={<MainPage  />}></Route>
        <Route path="/info" element={<Info  />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:block" element={<MainPage />}></Route>
        <Route path="/services/:service" element={<Services />}></Route>
        <Route path="/privacy-policy" element={<Privacy/>}></Route>
        <Route path="/reset-password" element={<PasswordReset />}></Route>
   </Routes>
  );
}

export default App;
