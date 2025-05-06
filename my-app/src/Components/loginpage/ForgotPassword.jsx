import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Password reset link has been sent to your email.');
    }, 1500);
  };

  return (
    <Box className="forgot-password-section" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box className="form-box" p={4} boxShadow={3} borderRadius={2} bgcolor="white" maxWidth={400} width="100%">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom align="center">
            Forgot Password
          </Typography>
          {successMessage && (
            <Typography variant="body2" color="success.main" align="center" gutterBottom>
              {successMessage}
            </Typography>
          )}
          <TextField
            label="Email or ID"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
          </Button>
          <Typography variant="body2" align="center" mt={2}>
            <Link to="/login" className="../loginpage/Login">
              Back to Login
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
};

export default ForgotPassword;