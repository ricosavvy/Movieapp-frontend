import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { setToken, setUser } from '../state';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
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
          alert('Logged in')
          const token = response.headers.get("access-token")
          dispatch(setToken({
            token: token,
          }));
          // console.log(token)
          return response.json()
        })
        .then(result => {
          const user = result.user;
          dispatch(setUser({
            user: user,
          }));
          // console.log(user)
          navigate("/Movies");
        })
        .catch(error => {
          console.log(error);
        });
    },
  });

  return (
    <div className="body">
    <div id="loginn">
      <h2 id="Header">Log In</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="username"
            id="username"
            name="username"
            required
            onChange={formik.handleChange}
            value={formik.values.username}
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
    </div>
  );
}

export default Login;
