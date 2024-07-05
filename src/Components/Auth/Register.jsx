import  { useState, useContext } from 'react';
import "../Auth/register.css"
import  {PaymentContext}  from '../../Context/PaymentContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const { register } = useContext(PaymentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="regForm" onSubmit={handleSubmit}>
      <p>Email Address</p>
      <input className="inp" type="email" placeholder='Wabdotmail@gmail.com'
       value={email} onChange={(e) =>
        setEmail(e.target.value)} required />

      <p>First Name</p>
      <input className="inp" type="firstName" placeholder='Wahab'
       value={firstName} onChange={(e) => 
        setFirstName(e.target.value)} required />

      <p>Last Name</p>
      <input className="inp" type="lastName" placeholder='Lawal' 
      value={lastName} onChange={(e) => 
        setLastName(e.target.value)} required />


      <p>password</p>
      <input className="inp" type="password" placeholder='Gabon4351'
       value={password} onChange={(e) => 
       setPassword(e.target.value)} required />

        <p>confirm Password</p>
      <input className="inp" type="password" placeholder='Gabon4351' 
      value={confirmpassword} onChange={(e) => 
        setConfirmPassword(e.target.value)} required />

      <button className='submitBtn' type="submit">Create Account</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
};

export default Register;