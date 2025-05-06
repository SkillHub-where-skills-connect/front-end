import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Modal } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Events.css';

const Events = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: 'March 30, 2025',
      description: 'Learn the basics of web development in this hands-on workshop.',
      image: 'path/to/web-dev.jpg',
    },
    {
      id: 2,
      title: 'Graphic Design Bootcamp',
      date: 'April 5, 2025',
      description: 'Master the fundamentals of graphic design with industry experts.',
      image: 'path/to/graphic-design.jpg',
    },
    {
      id: 3,
      title: 'Digital Marketing Seminar',
      date: 'April 10, 2025',
      description: 'Explore the latest trends in digital marketing and strategies.',
      image: 'path/to/digital-marketing.jpg',
    },
  ];

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              Events
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Explore our upcoming events and workshops to enhance your skills.
            </Typography>
          </Container>
        </Box>

        {/* Events Section */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card elevation={3} className="event-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {event.date}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mt: 2 }}
                      onClick={() => handleOpen(event)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Event Details Modal */}
        <Modal open={open} onClose={handleClose} aria-labelledby="event-title" aria-describedby="event-description">
          <Box className="modal-box">
            {selectedEvent && (
              <>
                <Typography id="event-title" variant="h5" gutterBottom>
                  {selectedEvent.title}
                </Typography>
                <Typography id="event-date" variant="body2" color="textSecondary" gutterBottom>
                  {selectedEvent.date}
                </Typography>
                <Typography id="event-description" variant="body1" paragraph>
                  {selectedEvent.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClose}>
                  Close
                </Button>
              </>
            )}
          </Box>
        </Modal>
      </main>
      <Footer />
    </>
  );
};

export default Events;