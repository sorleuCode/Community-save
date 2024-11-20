import  { useState } from "react";
import "./passwordInput.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ placeholder, value, onChange, name, onPaste }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="password">
      <input
        type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              required
              name={name}
              onChange={onChange}
              onPaste={onPaste}
              className="input"
          />
          
          <div className="icon" onClick={togglePassword}>
              {showPassword ? <AiOutlineEyeInvisible size={25}/> : <AiOutlineEye size={25}/>}
          </div>
    </div>
  );
};

export default PasswordInput;