import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserReg from "./Components/Register/UserReg";
// import './App.css'

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserReg />} />
      </Routes>
   
  );
}

export default App;
