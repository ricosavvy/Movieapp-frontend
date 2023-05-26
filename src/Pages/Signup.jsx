import React from 'react';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
    },
    onSubmit: async (values) => {
      await fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/auth/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://localhost:3000',
        },
        body: JSON.stringify(values),
      })
        .then(response => {
          console.log(response.json());
          Navigate("/LogIn"); // Changed from Navigate to navigate (lowercase)
        })
        .catch(error => {
          console.log(error);
        });
        
    },
  });

  return (
    <div id="loginn">
      <h2 id="Header">Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            required
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            required
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button id="buttton" type="submit">Submit</button>
      </form>
       <Typography color={'white'}>Already have an account? </Typography><Link to='/LogIn' id='togbtn'>Login</Link>
    </div>
  );
}

export default SignUp;
