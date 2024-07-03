import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './pages/Homepage';
import PaymentHistory from './Components/Dashboard/PaymentHistory';
import DashboardPage from './pages/DashboardPage';


const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path='/' element={<Homepage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/" element={<Login/>} />

        </Routes>
      </PaymentProvider>
    </>
function App() {
  return (
    <div className="App">
      <Dashboard />
      <PaymentHistory/>
    </div>
  );
}

export default App;