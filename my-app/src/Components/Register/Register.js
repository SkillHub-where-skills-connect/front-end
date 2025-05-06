import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography, Tabs, Tab, Grid, TextareaAutosize } from '@mui/material';
import './Register.css';

const Register = () => {
  const [activeTab, setActiveTab] = useState('user');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setTimeout((
      window.location.href='/'
    ),1000)
  };

  return (
    <Box className="register-section" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box className="form-box" p={4} boxShadow={3} borderRadius={2} bgcolor="white" maxWidth={600} width="100%">
        <Typography variant="h4" gutterBottom align="center">
          SkillHub Register
        </Typography>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="User Register" value="user" />
          <Tab label="Group Register" value="group" />
        </Tabs>

        <Box mt={3}>
          {/* User Registration Form */}
          {activeTab === 'user' && (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Full Name" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Phone Number" type="tel" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Email" type="email" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Aadhar Number" type="number" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Qualification" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" component="label" fullWidth>
                    Upload Profile Picture
                    <input type="file" hidden accept="image/*" />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Address"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', borderColor: '#ccc' }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                  </Button>
                  <Typography variant="body2" align="center" mt={2}>
                    Already have an account?
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          )}

          {/* Group Registration Form */}
          {activeTab === 'group' && (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Company Name" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Phone Number" type="tel" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email" type="email" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" component="label" fullWidth>
                    Upload Company Documents
                    <input type="file" hidden accept=".pdf,.doc" />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Established Date" type="date" InputLabelProps={{ shrink: true }} fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Location" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="About Us"
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', borderColor: '#ccc' }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register Company
                  </Button>
                  <Typography variant="body2" align="center" mt={2}>
                    Already have an account?
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Register;