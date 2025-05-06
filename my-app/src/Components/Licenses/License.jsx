import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const License = () => {
  return (
    <>
      <Header />
      <main>
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              License Information
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Learn more about the licenses and terms of use for SkillHub.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  User License
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This license allows individual users to access and use SkillHub's resources for personal development.
                  Redistribution or commercial use is prohibited.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Group License
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  This license is designed for organizations or groups to access SkillHub's resources. It includes
                  additional features like team collaboration and analytics.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Terms of Use
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  By using SkillHub, you agree to our terms of use, which include respecting intellectual property rights
                  and adhering to community guidelines.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default License;