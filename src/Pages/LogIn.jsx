import React, { useState } from 'react'; // Import React and useState hook
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

function LoginSignup() {
  const [login, setLogin] = useState(true); // Declare a login state variable and a function to update it

  const handleToggle = () => { // Function to toggle between log in and sign up
    setLogin(!login);
  };

  return (
    <div>
      {/* Display either "Log In" or "Sign Up" based on login state */}
      <h2>{login ? 'Log In' : 'Sign Up'}</h2> 
      <form>
        <div>
          {/* Label for email input field */}
          <label htmlFor="email">Email:</label> 
          {/* Email input field */}
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          {/* Label for password input field */}
          <label htmlFor="password">Password:</label> 
          {/* Password input field */}
          <input type="password" id="password" name="password" required /> 
        </div>
        {!login && ( // Show confirm password field if user is signing up
          <div>
            {/* Label for confirm password input field */}
            <label htmlFor="confirmPassword">Confirm Password:</label> 
            {/* Confirm password input field */}
            <input type="password" id="confirmPassword" name="confirmPassword" required /> 
          </div>
        )}
        {/* Submit button with conditional text based on login state */}
        <button type="submit">{login ? 'Log In' : 'Sign Up'}</button> 
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

