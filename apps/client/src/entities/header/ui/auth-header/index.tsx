import { Box, Button } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import { PopMenu } from 'src/shared/ui';

export type IAuthHeaderProps = {

}

const AuthHeader: React.FC<IAuthHeaderProps> = ({ }) => {
  const { data: session } = useSession()

  const languageOptions = [
    { title: "English", handler: () => ({}) },
    { title: "Spanish", handler: () => ({}) },
    { title: "Russian", handler: () => ({}) },
  ]

  const currencyOptions = [
    { title: "USD", handler: () => ({}) },
    { title: "EUR", handler: () => ({}) },
    { title: "RUB", handler: () => ({}) },
  ]

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <PopMenu sx={{ display: { xs: "none", sm: "block" } }} options={languageOptions} />
      <PopMenu sx={{ display: { xs: "none", sm: "block" } }} options={currencyOptions} />
      <Box sx={{ ml: "auto", mr: { xs: "auto", sm: 0 } }}>
        <Button >
          help
        </Button>
        {
          session?.user
            ?
            <Button onClick={() => signOut()}>
              <span style={{ fontStyle: "italic", marginRight: 10, opacity: 0.8 }}>{session.user.email}</span> Sign out
            </Button>
            :
            <>
              <Button onClick={() => signIn()}>
                Join us
              </Button>
              <Button>
                Sign in
              </Button>
            </>
        }

      </Box >
    </Box >
  );
}

export { AuthHeader };