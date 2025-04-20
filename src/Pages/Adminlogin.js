import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') {
      localStorage.setItem('admin-auth', 'authenticated');
      navigate('/admin');
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', width: '250px', fontSize: '16px' }}
      />
      <br />
      <button onClick={handleLogin} style={{ marginTop: '1rem', padding: '10px 20px', fontSize: '16px' }}>
        Login
      </button>
    </div>
  );
}
