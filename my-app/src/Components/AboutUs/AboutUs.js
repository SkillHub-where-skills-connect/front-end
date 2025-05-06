import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', image: 'path/to/john.jpg' },
    { name: 'Jane Smith', role: 'CTO', image: 'path/to/jane.jpg' },
    { name: 'Emily Johnson', role: 'Marketing Head', image: 'path/to/emily.jpg' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              About Us
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Welcome to Skillhub, your go-to platform for skill sharing and learning.
            </Typography>
          </Container>
        </Box>

        {/* Mission Section */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            At Skillhub, our mission is to empower individuals and organizations by providing a platform to share and
            learn skills, fostering growth and collaboration.
          </Typography>
        </Container>

        {/* Team Section */}
        <Box bgcolor="grey.100" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card elevation={3}>
                    <Box display="flex" justifyContent="center" mt={2}>
                      <Avatar src={member.image} alt={member.name} sx={{ width: 100, height: 100 }} />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" align="center">
                        {member.name}
                      </Typography>
                      <Typography variant="body2" align="center" color="textSecondary">
                        {member.role}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Follow Us Section */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton color="primary" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="primary" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;