import  { useState, useContext } from 'react';
import "../Auth/login.css"
// import { FaRegEyeSlash } from "react-icons/fa";
import { PaymentContext } from '../../Context/PaymentContext';
import PasswordInput from '../passwordInput/passwordInput';
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
    <form className='container' onSubmit={handleSubmit}>
      <div>
      {/* <label htmlFor='email-address'>Email Address</label> */}
      <p>Email Address</p>
      <input type="email" placeholder='wabdont@gmail.com' 
      value={email} onChange={(e) => 
        setEmail(e.target.value)}
      required />
       </div>
       

       
       <div className="">
            <label htmlFor="password">Password</label>
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

            

      <div className='remember-me'>

        
      <p className='remember'>Remember me</p>

      {/* <p className='save'> */}
      <Link className='save' to='/recover' >Recover password</Link> {" "}
      {/* </p> */}
      
      </div>
      <button type="submit">Login</button>

    
       
    </form>
  
    
  );
};

export default Login


