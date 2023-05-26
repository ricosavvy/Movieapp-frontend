import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { setLogin } from '../state';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await fetch(`https://movieapp-backend-production-a4be.up.railway.app/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://localhost:3000',
        },
        body: JSON.stringify(values),
      })
        .then(response => {
          console.log(response.headers.get("access-token"), response.json());
          dispatch(setLogin({
            user: response.user.json(),
            token: response.headers.get("access-token"),
          }));
          Navigate("/Movies");
        })
        .then(result => console.log(result))
        .catch(error => {
          console.log(error);
        });
        
    },
  });

  return (
    <div id="loginn">
      <h2 id="Header">Log In</h2>
      <form onSubmit={formik.handleSubmit}>
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
        <button id="buttton" type="submit">Log In</button>
      </form>
      <Typography color={'white'}>Don't have an account? </Typography><Link to='/SignUp' id='togbtn'>Sign up</Link>
    </div>
  );
}

export default Login;
