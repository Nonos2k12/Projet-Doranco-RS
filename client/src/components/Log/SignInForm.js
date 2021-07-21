import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {

    }

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
        <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;