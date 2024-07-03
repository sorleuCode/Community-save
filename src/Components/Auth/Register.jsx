import  { useState, useContext } from 'react';
import "../Auth/register.css"
import  {PaymentContext}  from '../../Context/PaymentContext';

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
    <form onSubmit={handleSubmit}>
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


      <p>password</p>
      <input type="password" placeholder='Gabon4351'
       value={password} onChange={(e) => 
       setPassword(e.target.value)} required />

        <p>confirm Password</p>
      <input type="password" placeholder='Gabon4351' 
      value={confirmpassword} onChange={(e) => 
        setConfirmPassword(e.target.value)} required />

      <button type="submit">Create Account</button>
    </form>
  );
};

export default Register;