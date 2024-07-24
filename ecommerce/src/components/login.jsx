import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState('');

  const validate = () => {
    
    if (!formData.email) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Email is invalid';
    }

    if (!formData.password) {
      return 'Password is required';
    } else if (formData.password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors('');  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    setErrors(validationError);

    if (!validationError) {
      console.log('Form data:', formData);
      navigate('/'); 
    }
  };

 
  const gologin = () => {
    navigate('/reg');
  };

  return (
    <div className="back">
      <div style={{ width: '70%', height: '92%', padding: '2%' }}>
        <div className="image"></div>
      </div>
      <div className="login">
        <div className="contain">
          <div className="circle"></div>
          <div>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ padding: '10px' }}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div style={{ padding: '10px' }}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors && <p className="error">{errors}</p>}
            <div style={{ padding: '10px', position: 'relative' }}>
              <button type="submit">Login</button>
            </div>
          </form>
          <div style={{ padding: '10px' }}>
            <h5>login or click the below link to register</h5>
          </div>
          <div style={{ padding: '10px' }}>
            <h3 onClick={gologin}>Login Now!</h3>
          </div>
          <div style={{ padding: '10px' }}>
            <button >Continue with Google</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
