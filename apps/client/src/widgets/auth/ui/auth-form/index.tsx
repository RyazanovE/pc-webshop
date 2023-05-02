import { TextField, Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export type IAuthFormProps = {
}

const AuthForm: React.FC<IAuthFormProps> = ({ }) => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signIn("credentials", { username, password, redirect: true, callbackUrl: "/" })
    } catch (error) {
      console.log(error)
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        marginTop: '16px',
        boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        style={{ marginBottom: '8px' }}
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        style={{ marginBottom: '8px' }}
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '8px' }}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: '8px' }}
        onClick={handleRegister}
      >
        Register
      </Button>
    </form>
  );
}

export { AuthForm };