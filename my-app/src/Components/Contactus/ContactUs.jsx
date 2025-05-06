import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              Contact Us
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              We'd love to hear from you! Fill out the form below to get in touch with us.
            </Typography>
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Container maxWidth="sm" sx={{ py: 5 }}>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;