import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const payload = { username, password };
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, payload);
    console.log(response.data);
  };

  return (
    <div className='login-container'>
      <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;