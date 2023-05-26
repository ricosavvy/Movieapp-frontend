<<<<<<< HEAD
import React from 'react';
import { useFormik } from 'formik';
import { navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
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
          navigate("/LogIn"); // Changed from Navigate to navigate (lowercase)
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
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
        {/* Rest of the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
      <Link to='/LogIn'>login</Link>
  );
}

export default SignUp;
=======
import React from 'react'
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import './pages.css'

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  
};

export default SignupForm 
>>>>>>> 134b2941d7b2a2e7e82cbf55b8bcd2b402cc3f6f
