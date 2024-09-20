"use client";

import { useState, useRef } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  TextField,
} from "@mui/material";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container maxWidth='sm'>
      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 4,
          backgroundColor: "#eee",
        }}
      >
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom align='center'>
            Sign Up
          </Typography>
          <TextField
            required
            fullWidth
            variant='filled'
            label='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            variant='filled'
            label='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            variant='filled'
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            variant='filled'
            label='Phone Number'
            name='phoneNumber'
            type='tel'
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            size='large'
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
