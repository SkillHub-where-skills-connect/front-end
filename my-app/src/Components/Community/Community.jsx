import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Community.css';

const Community = () => {
  const users = [
    { name: 'John Doe', role: 'Web Developer', image: 'path/to/john.jpg' },
    { name: 'Jane Smith', role: 'Graphic Designer', image: 'path/to/jane.jpg' },
    { name: 'Emily Johnson', role: 'Digital Marketer', image: 'path/to/emily.jpg' },
  ];

  const posts = [
    { title: 'How to Learn React', author: 'John Doe', date: 'March 20, 2025' },
    { title: 'Top 10 Graphic Design Tips', author: 'Jane Smith', date: 'March 18, 2025' },
    { title: 'Digital Marketing Strategies for 2025', author: 'Emily Johnson', date: 'March 15, 2025' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              Community
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              We create an interface where users and experts share their knowledge.
            </Typography>
          </Container>
        </Box>

        {/* User Profiles Section */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Meet Our Community Members
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {users.map((user, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={3}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Avatar src={user.image} alt={user.name} sx={{ width: 100, height: 100 }} />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" align="center">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" align="center" color="textSecondary">
                      {user.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Recent Posts Section */}
        <Box bgcolor="grey.100" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              Recent Posts
            </Typography>
            <Grid container spacing={4}>
              {posts.map((post, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        By {post.author} on {post.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call-to-Action Section */}
        <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Become a part of our growing community and start sharing your knowledge today.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Community;