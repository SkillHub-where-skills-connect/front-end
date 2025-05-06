import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Box bgcolor="primary.main" color="white" py={4}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Links Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <ul className="footer-links">
                <li><Link to="/support-faqs" className="footer-link">Support & FAQs</Link></li>
                <li><Link to="/license" className="footer-link">License</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              </ul>
            </Grid>

            {/* Social Media Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box>
                <IconButton color="inherit" href="https://facebook.com" target="_blank">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://instagram.com" target="_blank">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>

            {/* Contact Section */}
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2">
                Email: support@skillhub.com
              </Typography>
              <Typography variant="body2">
                Phone: +1 (123) 456-7890
              </Typography>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="center">
            <Typography variant="body2">
              © {new Date().getFullYear()} Skillhub. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;