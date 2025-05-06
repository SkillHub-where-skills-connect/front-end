import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
import './Login.css';
import Header from '../Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    // Add your login logic here
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === 'password') {
        alert('Login successful!');
      } else {
        setError('Invalid email or password');
      }
    }, 1000);
  };

  return (
    <div>
      <Header/>
      <Box className="login-section" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
       
       <Box className="form-box" p={4} boxShadow={3} borderRadius={2} bgcolor="white" maxWidth={400} width="100%">
         <form onSubmit={handleSubmit}>
           <Typography variant="h4" gutterBottom align="center">
             Login
           </Typography>
           {error && (
             <Typography variant="body2" color="error" align="center" gutterBottom>
               {error}
             </Typography>
           )}
           <TextField
             label="Email"
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             fullWidth
             margin="normal"
             required
           />
           <TextField
             label="Password"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             fullWidth
             margin="normal"
             required
           />
           <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
             <FormControlLabel
               control={<Checkbox color="primary" />}
               label="Remember Me"
             />
             <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#1976d2' }}>
               Forgot Password?
             </Link>
           </Box>
           <Button
             type="submit"
             variant="contained"
             color="primary"
             fullWidth
             disabled={loading}
             sx={{ mt: 2 }}
           >
             {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
           </Button>
           <Typography variant="body2" align="center" mt={2}>
             Don't have an account?{' '}
             <Link to="/register" style={{ textDecoration: 'none', color: '#1976d2' }}>
               Sign Up
             </Link>
           </Typography>
         </form>
       </Box>
     </Box>
    </div>
   
    
  );
};

export default Login;