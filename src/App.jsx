// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import AdminSidebar from './Components/Dashboard/AdminSidebar';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import './index.css'



const App = () => {
  return (
    <div className="app">
      <AdminSidebar />
      <AdminDashboard />
    </div>
  );
};

export default App;
