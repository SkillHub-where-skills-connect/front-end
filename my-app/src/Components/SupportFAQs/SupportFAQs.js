import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SupportFAQs = () => {
  const faqs = [
    {
      question: 'What is SkillHub?',
      answer: 'SkillHub is a platform for skill sharing and learning, connecting individuals and organizations.',
    },
    {
      question: 'How can I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
    },
    {
      question: 'How do I register as a group?',
      answer: 'To register as a group, go to the Register page and select the "Group Register" tab.',
    },
    {
      question: 'What licenses are available?',
      answer: 'We offer User and Group licenses. Visit the License page for more details.',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Box bgcolor="primary.light" py={5}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary.dark">
              Support & FAQs
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Find answers to common questions or contact us for further assistance.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 5 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}-content`} id={`faq-${index}-header`}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default SupportFAQs;