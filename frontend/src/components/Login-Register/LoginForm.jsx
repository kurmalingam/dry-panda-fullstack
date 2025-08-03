import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ role, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful!');
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);       // ✅ Set login state
        navigate('/');             // ✅ Redirect to home
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <form id="login-form" onSubmit={handleLogin} style={{ display: 'flex' }}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" className="operator-btn">Login</button>
    </form>
  );
};

export default LoginForm;
