import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/aboutus/About';
import BlogPage from './Components/blogpage/BlogPage';



const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/register" element={<Register/>} /> */}
          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<BlogPage/>} />
          {/* <Route path="/footer" element={<Footer/>} /> */}


          <Route path="/" element={<Login/>} />

        </Routes>
      </PaymentProvider>
    </>

  );
}

export default App;