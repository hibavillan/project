import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Add actual registration logic here
      console.log('Registering with Email:', email);
      console.log('Password:', password);
      navigate('/recipes'); // Redirect to login after successful registration
    } else { 
      // Add actual login logic here
      console.log('Logging in with Email:', email);
      console.log('Password:', password);
      navigate('/recipes');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginTop: '150px' }}>
      <h2 style={{ display: 'block', marginBottom: '0.1rem', color: 'white', textAlign: 'center' }}>
        {isRegistering ? 'Register' : 'Login'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        {isRegistering && (
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
        )}
        <button type="submit" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: 'none', background: '#007BFF', color: '#fff', marginBottom: '1rem' }}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <div style={{ textAlign: 'center' }}>
          {isRegistering ? (
            <>
              <span>Already have an account? </span>
              <a href="#" onClick={() => setIsRegistering(false)} style={{ color: '#007BFF', textDecoration: 'none' }}>Login</a>
            </>
          ) : (
            <>
              <span>Don’t have an account? </span>
              <a href="" onClick={() => setIsRegistering(true)} style={{ color: '#007BFF', textDecoration: 'none' }}>Sign Up</a>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
