import  { useState, useContext } from 'react';
import "../Auth/login.css"
// import { FaRegEyeSlash } from "react-icons/fa";
import { PaymentContext } from '../../Context/PaymentContext';
import PasswordInput from '../passwordInput/PasswordInput';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail ] = useState('');
  const [password, ] = useState('');
  const { login } = useContext(PaymentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
    <form className='formin' onSubmit={handleSubmit}>
      <label htmlFor='email-address'>Email Address</label>
      <input type="email" className='putin' placeholder='wabdont@gmail.com' 
      value={email} onChange={(e) => 
        setEmail(e.target.value)}
      required />
       

       
       <div className="">
            <label htmlFor="password">Password</label>
            <PasswordInput
            type="password"
            className="labelbassy"
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={handleSubmit}
            />
          </div>

            

      <div className='remember-me'>

        

      <Link id='save' to='/recover' >Recover password</Link> {" "}
      
      </div>
      <button type="submit" id='logging' >Login</button>

    
       
    </form>
    </div>
    
  );
};

export default Login