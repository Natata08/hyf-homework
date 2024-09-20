"use client";

import { useState, useRef, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  TextField,
  Alert,
} from "@mui/material";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  const validateField = (name, value) => {
    let isValid = true;

    switch (name) {
      case "firstName":
      case "lastName":
        isValid = value.trim() !== "";
        break;
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case "phoneNumber":
        isValid = /^\d{10}$/.test(value);
        break;
      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: !isValid,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(formData).every((key) => {
      validateField(key, formData[key]);
      return !errors[key];
    });

    if (isValid) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
      setErrors({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
      });
    } else {
      console.log("Form contains errors.");
      setIsSubmitted(false);
    }
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
            inputRef={firstNameRef}
            error={errors.firstName}
            helperText={errors.firstName ? "First name is required" : ""}
          />
          <TextField
            required
            fullWidth
            variant='filled'
            label='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            helperText={errors.lastName ? "Last name is required" : ""}
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
            error={errors.email}
            helperText={errors.email ? "Enter a valid email" : ""}
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
            error={errors.phoneNumber}
            helperText={
              errors.phoneNumber ? "Enter a valid 10-digit phone number" : ""
            }
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
        {isSubmitted && (
          <Alert
            severity='success'
            sx={{ marginTop: "1rem", backgroundColor: "#69bf6d73" }}
          >
            Form submitted successfully!
          </Alert>
        )}
      </Paper>
    </Container>
  );
}
