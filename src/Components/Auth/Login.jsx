import  { useState, useContext } from 'react';
import "../Auth/login.css"
import { FaRegEyeSlash } from "react-icons/fa";
import { PaymentContext } from '../../Context/PaymentContext';

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
      <input type="email" placeholder='wabdont@gmail.com' 
      value={email} onChange={(e) =>
       setEmail(e.target.value)} required />

              <div className="--dir-column">
                <p></p>
                <label htmlFor="password">password</label>
                <FaRegEyeSlash
                placeholder="Wabdont@gmail.com"
                  values={password} onChange={(e) =>
                    setPassword(e.target.value) 
                  }
                 
                  />
                 
                </div>

      <div className='remember-me'>
      <p className='remember'>Remember me</p>
      <p className='recover'>Recover password</p>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login