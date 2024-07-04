import  { useState,  } from 'react'; // useContext
import "./register.css"
// import { Link } from "react-router-dom";
import PasswordInput from '../passwordInput/passwordInput';

// import  {PaymentContext}  from '../../Context/PaymentContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, ] = useState('');
  const [confirmpassword, ] = useState('');
  
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
      <p>Email Address</p>
      <input type="email" placeholder='Wabdotmail@gmail.com'
       value={email} onChange={(e) =>
        setEmail(e.target.value)} required />

      <p>First Name</p>
      <input type="firstName" placeholder='Wahab'
       value={firstName} onChange={(e) => 
        setFirstName(e.target.value)} required />

      <p>Last Name</p>
      <input type="lastName" placeholder='Lawal' 
      value={lastName} onChange={(e) => 
        setLastName(e.target.value)} required />


<div className="">
            <label htmlFor="password">Password:</label>
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

      <button type="submit">Create Account</button>
      
    <div>
     {/* <p>
     Already have an account? <Link to="/login">Login</Link>
   </p> */}
   </div>
    </form>
  );
};

export default Register;



