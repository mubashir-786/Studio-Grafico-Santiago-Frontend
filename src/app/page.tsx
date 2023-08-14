import Logo from "@/assets/icons/logo.svg";
import { APP_URL } from "@/config/environments";
import { Header } from "@/utils/enums";
import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Logo />
      {/* .env test */}
      <Typography> {APP_URL}</Typography>
      {/* enums testing */}
      <Typography> {Header.TEXT}</Typography>
    </Box>
  );
}
