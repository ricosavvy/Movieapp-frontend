import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function AuthPage() {
  const [hasAccount, setHasAccount] = useState(true);

  const togglePage = () => {
    setHasAccount(prevState => !prevState);
  };

  return (
    <div>
      {hasAccount ? <Login togglePage={togglePage} /> : <SignUp togglePage={togglePage} />}
    </div>
  );
}

export default AuthPage;
