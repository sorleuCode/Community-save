<<<<<<< HEAD
// import React, { useState, useContext } from 'react';
// import  {PaymentContext}  from '../../Context/PaymentContext';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { register } = useContext(PaymentContext);
=======
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
>>>>>>> 578de048a7f0847a12fe6dc587aaa3fc2fdfdaa2

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(email, password);
//     } catch (err) {
//       console.error(err);
//     }
//   };

<<<<<<< HEAD
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// };
=======
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
>>>>>>> 578de048a7f0847a12fe6dc587aaa3fc2fdfdaa2

// export default Register;