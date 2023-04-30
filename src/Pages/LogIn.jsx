import React, { useState } from 'react'; // Import React and useState hook
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

function LoginSignup() {
  const [login, setLogin] = useState(true); // Declare a login state variable and a function to update it

  const handleToggle = () => { // Function to toggle between log in and sign up
    setLogin(!login);
  };

  return (
    <div>
      <h2>{login ? 'Log In' : 'Sign Up'}</h2> // Display either "Log In" or "Sign Up" based on login state
      <form>
        <div>
          <label htmlFor="email">Email:</label> // Label for email input field
          <input type="email" id="email" name="email" required /> // Email input field
        </div>
        <div>
          <label htmlFor="password">Password:</label> // Label for password input field
          <input type="password" id="password" name="password" required /> // Password input field
        </div>
        {!login && ( // Show confirm password field if user is signing up
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label> // Label for confirm password input field
            <input type="password" id="confirmPassword" name="confirmPassword" required /> // Confirm password input field
          </div>
        )}
        <button type="submit">{login ? 'Log In' : 'Sign Up'}</button> // Submit button with conditional text based on login state
      </form>
      <div>
        {login ? ( // Link to toggle between log in and sign up
          <p>
            Don't have an account?{' '}
            <Link onClick={handleToggle} to="#">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <Link onClick={handleToggle} to="#">
              Log In
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginSignup; // Export the LoginSignup component

