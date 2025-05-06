import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import './Home.css';
import { Login } from '@mui/icons-material';

const Home = () => {
  const events = [
    { id: 1, title: 'Event 1', description: 'Details about Event 1.', image: 'path/to/your/event1.jpg' },
    { id: 2, title: 'Event 2', description: 'Details about Event 2.', image: 'path/to/your/event2.jpg' },
    { id: 3, title: 'Event 3', description: 'Details about Event 3.', image: 'path/to/your/event3.jpg' },
  ];

  const testimonials = [
    { id: 1, text: 'Skillhub has been a game-changer for my career. The courses are top-notch!', author: 'User 1' },
    { id: 2, text: 'I love the community aspect of Skillhub. I\'ve met so many like-minded individuals.', author: 'User 2' },
    { id: 3, text: 'The events and workshops are incredibly informative and well-organized.', author: 'User 3' },
  ];

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <Box  bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              Welcome to Skillhub
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Your platform for skill sharing and learning.
            </Typography>
            <Box textAlign="center" mt={3}>
              <Button variant="contained" color="primary" size="large" href="/login">
                Get Started
              </Button>
             
            </Box>
          </Container>
        </Box>

        {/* Carousel Section */}
        <section className="carousel-section">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="path/to/your/image1.jpg" className="d-block w-100" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <Typography variant="h5">First Slide</Typography>
                  <Typography variant="body2">Some representative placeholder content for the first slide.</Typography>
                </div>
              </div>
              <div className="carousel-item">
                <img src="path/to/your/image2.jpg" className="d-block w-100" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <Typography variant="h5">Second Slide</Typography>
                  <Typography variant="body2">Some representative placeholder content for the second slide.</Typography>
                </div>
              </div>
              <div className="carousel-item">
                <img src="path/to/your/image3.jpg" className="d-block w-100" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <Typography variant="h5">Third Slide</Typography>
                  <Typography variant="body2">Some representative placeholder content for the third slide.</Typography>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Events Section */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Upcoming Events
          </Typography>
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card elevation={3}>
                  <CardMedia component="img" height="140" image={event.image} alt={event.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {event.description}
                    </Typography>
                    <Button variant="contained" color="primary" size="small" sx={{ mt: 2 }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Testimonials Section */}
        <Box bgcolor="grey.100" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
              What Our Users Say
            </Typography>
            <Grid container spacing={4}>
              {testimonials.map((testimonial) => (
                <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="body1" paragraph>
                        "{testimonial.text}"
                      </Typography>
                      <Typography variant="h6" align="right">
                        - {testimonial.author}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Home;