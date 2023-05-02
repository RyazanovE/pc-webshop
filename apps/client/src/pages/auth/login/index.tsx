import { Box } from '@mui/material';
import { AuthForm } from 'src/widgets/auth';


export default function LoginRegisterForm() {

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AuthForm />
    </Box>

  );
}