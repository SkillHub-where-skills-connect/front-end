import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, TextField, Button, MenuItem, Modal } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SkillsServices.css';

import webDevImage from '../Asserts/background.jpg';
import graphicDesignImage from '../Asserts/graphicaldesign.webp';
import digitalMarketingImage from '../Asserts/background.jpg';
import dataAnalysisImage from '../Asserts/data-analysis.png';
import contentWritingImage from '../Asserts/Content-Writing.jpg';

const SkillsServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { id: 1, title: 'Web Development', category: 'Technology', image: webDevImage, description: 'Learn how to build modern websites and web applications.' },
    { id: 2, title: 'Graphic Design', category: 'Design', image: graphicDesignImage, description: 'Master the art of visual communication and design.' },
    { id: 3, title: 'Digital Marketing', category: 'Marketing', image: digitalMarketingImage, description: 'Explore strategies to grow your business online.' },
    { id: 4, title: 'Data Analysis', category: 'Technology', image: dataAnalysisImage, description: 'Analyze and interpret complex data to make informed decisions.' },
    { id: 5, title: 'Content Writing', category: 'Writing', image: contentWritingImage, description: 'Learn how to create compelling and engaging content.' },
  ];

  const filteredSkills = skills.filter(
    (skill) =>
      (filter === 'All' || skill.category === filter) &&
      skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpen = (skill) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSkill(null);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              Skills & Services
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Explore a variety of skills and services offered by our community.
            </Typography>
          </Container>
        </Box>

        {/* Search and Filter Section */}
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <TextField
              label="Search Skills"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              sx={{ mr: 2 }}
            />
            <TextField
              select
              label="Filter by Category"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              variant="outlined"
              sx={{ width: 200 }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Writing">Writing</MenuItem>
            </TextField>
          </Box>

          {/* Skills Grid */}
          <Grid container spacing={4}>
            {filteredSkills.map((skill) => (
              <Grid item xs={12} sm={6} md={4} key={skill.id}>
                <Card className="skill-card" elevation={3}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={skill.image}
                    alt={skill.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Category: {skill.category}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mt: 2 }}
                      onClick={() => handleOpen(skill)}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* No Results Message */}
          {filteredSkills.length === 0 && (
            <Typography variant="body1" align="center" color="textSecondary" mt={4}>
              No skills found. Try adjusting your search or filter.
            </Typography>
          )}
        </Container>

        {/* Skill Details Modal */}
        <Modal open={open} onClose={handleClose} aria-labelledby="skill-title" aria-describedby="skill-description">
          <Box className="modal-box">
            {selectedSkill && (
              <>
                <Typography id="skill-title" variant="h5" gutterBottom>
                  {selectedSkill.title}
                </Typography>
                <Typography id="skill-category" variant="body2" color="textSecondary" gutterBottom>
                  Category: {selectedSkill.category}
                </Typography>
                <Typography id="skill-description" variant="body1" paragraph>
                  {selectedSkill.description}
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

export default SkillsServices;