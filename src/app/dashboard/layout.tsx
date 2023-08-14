import DashboardIcon from "@/assets/icons/DashboardIcon";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LogoutIcon from "@mui/icons-material/Logout";
import StarIcon from "@mui/icons-material/Star";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | Infinite Craft",
  description: "Dashboard | Infinite Craft",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Dashboard", href: "/", icon: DashboardIcon },
  { text: "Profile", href: "/starred", icon: StarIcon },
  { text: "Save Prompts", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [{ text: "Logout", icon: LogoutIcon }];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              height: "auto",
              bottom: 0,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box sx={{ padding: "1rem" }}>Logo</Box>
          <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            ml: `${DRAWER_WIDTH}px`,
            mt: ["48px", "56px", "64px"],
            p: 3,
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
