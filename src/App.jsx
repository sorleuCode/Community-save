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
import AdminSidebar from './Components/Dashboard/AdminSidebar';
import AdminDashboard from "./Components/Dashboard/adminDashboard";
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
