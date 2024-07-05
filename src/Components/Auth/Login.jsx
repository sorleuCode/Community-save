import  { useState, useContext } from 'react';
import "../Auth/login.css"
import { FaRegEyeSlash } from "react-icons/fa";
import { PaymentContext } from '../../Context/PaymentContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <form className='style' onSubmit={handleSubmit}>
      <p>Email Address</p>
      <input className="inp" type="email" placeholder='wabdont@gmail.com' 
      value={email} onChange={(e) =>
       setEmail(e.target.value)} required />

              <div className="--dir-column">
                <p></p>
                <label htmlFor="password">password</label>
                <input className="inp" type="password"  values={password} placeholder='**********'/>
                
                 
                </div>

      {/* <div className='remember-me'>
      <p className='remember'>Remember me</p>
      <p className='recover'>Recover password</p>
      </div> */}

      <button className='submitBtn' type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
    </form>
  );
};

export default Login