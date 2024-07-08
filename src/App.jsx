// import React from 'react';
// import AdminDashboard from './Components/Dashboard/AdminDashboard';


// const App = () => {
//   return (
//     <>
     
        
//         <Routes>
//          <Route path='/adminDashboard' element={<AdminDashboard/>} />


//         </Routes>
     
//     </>
//   );
// };


// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
import About from './Components/aboutus/About';
import BlogPage from './Components/blogpage/BlogPage';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import Recover from './Components/Auth/Recover';
import './index.css'




const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/recover" element={<Recover/>} />
          <Route path="/register" element={<Register/>} />
          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<BlogPage/>} />
          {/* <Route path="/footer" element={<Footer/>} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </PaymentProvider>
    </>

  );
};

export default App;
