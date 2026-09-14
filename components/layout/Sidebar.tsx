"use client";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";

import { usePathname, useRouter } from "next/navigation";

const drawerWidth = 240;

const menuItems = [
  {
    label: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    path: "/",
  },
  {
    label: "Patients",
    icon: <PeopleOutlineIcon />,
    path: "/patients",
  },
];

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({
  mobileOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const handleNavigation = (path: string) => {
    router.push(path);

    if (isMobile) {
      onClose();
    }
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          height: 72,
          display: "flex",
          alignItems: "center",
          px: 3,
        }}
      >
        <MedicalServicesOutlinedIcon
          sx={{
            color: "primary.main",
            mr: 1,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          MediCare
        </Typography>
      </Box>

      <Divider />

      {/* Navigation */}
      <List sx={{ px: 1.5, pt: 2 }}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <ListItemButton
              key={item.label}
              selected={isActive}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                cursor: "pointer",

                "&.Mui-selected": {
                  backgroundColor: "#E6F5F2",
                  color: "primary.main",

                  "& .MuiListItemIcon-root": {
                    color: "primary.main",
                  },
                },

                "&.Mui-selected:hover": {
                  backgroundColor: "#E6F5F2",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: "text.secondary",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: isActive ? 600 : 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Doctor profile */}
      <Box sx={{ mt: "auto" }}>
        <Divider />

        <Box sx={{ p: 2 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600 }}
          >
            Dr. Sarah Wilson
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Cardiologist
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile ? mobileOpen : true}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}