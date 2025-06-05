import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const developers = [
  {
    name: "Gunjan",
    role: "Frontend Developer",
    image: "/dev1.jpeg",
    bio: "Specializes in UI/UX with React.",
    email: "gunjan020303@gmail.com"
  },
  {
    name: "Swati Sharma",
    role: "Backend Developer",
    image: "/dev2.jpg",
    bio: "Expert in Node.js and databases.",
    email: "ss01062000@gmail.com"
  },
  {
    name: "Pratiksha",
    role: "Full Stack Developer",
    image: "/dev3.jpg",
    bio: "Made project report including SRS & SDS. ",
    email: "ps0523822@gmail.com"
  }
];

const About = () => {
  return (
    <Box>

      
      <Box
        sx={{
          background: 'linear-gradient(to right, #fce3ec, #ffe8f1)',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#6B8E23" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" maxWidth="600px" mx="auto">
          Shoppers is your one-stop online store for everything from gadgets to Makeup.
        </Typography>
      </Box>

      {/* Developers Section */}
      <Box sx={{ py: 8, px: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Developers
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 4 }}>
          {developers.map((dev, idx) => (
            <Box
              key={idx}
              sx={{
                width: 250,
                border: '1px solid #ddd',
                borderRadius: 3,
                p: 3,
                boxShadow: 2,
                backgroundColor: '#fff'
              }}
            >
              <Avatar
                src={dev.image}
                alt={dev.name}
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid #e91e63'
                }}
              />
              <Typography variant="h6">{dev.name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {dev.role}
              </Typography>
              <Typography variant="body2" mt={1}>
                {dev.bio}
              </Typography>
              <Typography variant="body2" mt={1} color="primary">
                <a href={`mailto:${dev.email}`}>{dev.email}</a>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      
      <Box
        sx={{
          backgroundColor: '#f3e5f5',
          py: 8,
          textAlign: 'center',
          mt: 10
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#9c27b0" mb={4}>
          Meet The Team
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: 'wrap',
          }}
        >
          {['T', 'E', 'A', 'M'].map((letter, idx) => (
            <Box
              key={idx}
              sx={{
                width: 120,
                height: 120,
                backgroundColor: '#6B8E23',
                color: 'white',
                fontSize: '3rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20%',
                boxShadow: 3
              }}
            >
              {letter}
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default About;
