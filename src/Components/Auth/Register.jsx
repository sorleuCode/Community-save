
import  { useState, useContext } from 'react';
import "../Auth/register.css"
import  {PaymentContext}  from '../../Context/PaymentContext';
// import  { useState,  } from 'react'; // useContext
import "./register.css"
import PasswordInput from '../passwordInput/PasswordInput';
// import { Link } from "react-router-dom";
// import PasswordInput from '../passwordInput/PasswordInput';

// import  {PaymentContext}  from '../../Context/PaymentContext';
const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const { register } = useContext(PaymentContext);
  
  // const { register } = useContext(PaymentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await register(email, password);
    } catch (err) {
      console.error(err);

    }
  };
  return (
    <form className='container_reg' onSubmit={handleSubmit}>
      
      <label htmlFor="fullName" className='labellio'>Fullname:</label>

      <input type="fullname" placeholder='Wabdot Olami'
       value={fullName} onChange={(e) =>
        setEmail(e.target.value)} required />

      
      <label htmlFor="email" className='labellio'>Email:</label>

      <input type="email" placeholder='Wabdotmail@gmail.com'
       value={email} onChange={(e) => 
        setEmail(e.target.value)} required />

      
      <label htmlFor="UserName" className='labellio'>Username:</label>

      <input type="name" placeholder='Lawal' 
      value={userName} onChange={(e) => 
        setUserName(e.target.value)} required />


<div className="">
            <label htmlFor="password" className='labellio'>Password:</label>
            <PasswordInput
            type="password"
            className="input"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={handleSubmit}
            />
          </div>

           <div className="">
            <label htmlFor="password">confirm Password:</label>
            <PasswordInput
            type="password"
            className="input"
            name="password"
            placeholder="Enter your password"
            required
            value={confirmpassword}
            onChange={handleSubmit}
            />
          </div>

      <button type="submit" className='registerbutt'>Create Account</button>
      
    <div>
     {/* <p>
     Already have an account? <Link to="/login">Login</Link>
   </p> */}
   </div>
    </form>
  );
};

export default Register;
