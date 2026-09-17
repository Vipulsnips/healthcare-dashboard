"use client";

import { useState } from "react";

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const drawerWidth = 240;

const notifications = [
  {
    title: "Critical BP reading",
    description: "John Smith's blood pressure requires review.",
    time: "10 minutes ago",
    icon: <WarningAmberOutlinedIcon />,
    iconBackground: "#FDEAEA",
    iconColor: "#E57373",
    isNew: true,
  },
  {
    title: "Overdue follow-up",
    description: "Maria Thomas's follow-up appointment is overdue.",
    time: "2 hours ago",
    icon: <CalendarTodayOutlinedIcon />,
    iconBackground: "#FFF3DA",
    iconColor: "#E8A83E",
    isNew: true,
  },
  {
    title: "Lab results ready",
    description: "Robert Lee's lab results are ready for review.",
    time: "3 hours ago",
    icon: <AssignmentTurnedInOutlinedIcon />,
    iconBackground: "#E6F5F2",
    iconColor: "#58B7A8",
    isNew: true,
  },
  {
    title: "New patient registered",
    description: "Sophia Martinez was added to your list.",
    time: "Yesterday",
    icon: <PersonOutlineOutlinedIcon />,
    iconBackground: "#E5F1FA",
    iconColor: "#5B9BC9",
    isNew: false,
  },
];

export default function Topbar() {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const profileOpen = Boolean(profileAnchor);

  const handleProfileOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleNotificationOpen = () => {
    setNotificationOpen(true);
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <>
      {/* ================= TOPBAR ================= */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
          backgroundColor: "background.paper",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar
          sx={{
            minHeight: "72px !important",
            px: {
              xs: 2,
              md: 4,
            },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Page title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            Dashboard
          </Typography>

          {/* Right side */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 0.5,
                sm: 1.5,
              },
            }}
          >
            {/* Search */}
            <Box
              sx={{
                width: {
                  xs: 140,
                  sm: 240,
                },
                height: 38,
                display: "flex",
                alignItems: "center",
                px: 1.5,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                backgroundColor: "#FAFCFC",
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: 20,
                  color: "text.secondary",
                  mr: 1,
                }}
              />

              <InputBase
                placeholder="Search..."
                sx={{
                  flex: 1,
                  fontSize: 14,
                }}
              />
            </Box>

            {/* Notification */}
            <IconButton
              onClick={handleNotificationOpen}
              sx={{
                color: "text.secondary",
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            {/* Profile Avatar */}
            <IconButton
              onClick={handleProfileOpen}
              sx={{
                p: 0,
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: "primary.main",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                SW
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= PROFILE MENU ================= */}
      <Menu
        anchorEl={profileAnchor}
        open={profileOpen}
        onClose={handleProfileClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              width: 265,
              mt: 1,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
            },
          },
        }}
      >
        {/* Profile Header */}
        <Box
          sx={{
            px: 2,
            py: 2,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Avatar
            sx={{
              width: 44,
              height: 44,
              bgcolor: "#DDF3EF",
              color: "#58B7A8",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            DS
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              Dr. Sarah Chen
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: "text.secondary",
                mt: 0.2,
              }}
            >
              sarah.chen@medicare.io
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* My Profile */}
        <MenuItem
          onClick={handleProfileClose}
          sx={{
            minHeight: 48,
            gap: 1.5,
            px: 2,
          }}
        >
          <AccountCircleOutlinedIcon
            sx={{
              fontSize: 20,
              color: "text.secondary",
            }}
          />

          <Typography sx={{ fontSize: 15 }}>My Profile</Typography>
        </MenuItem>

        {/* Account Settings */}
        <MenuItem
          onClick={handleProfileClose}
          sx={{
            minHeight: 48,
            gap: 1.5,
            px: 2,
          }}
        >
          <SettingsOutlinedIcon
            sx={{
              fontSize: 20,
              color: "text.secondary",
            }}
          />

          <Typography sx={{ fontSize: 15 }}>Account Settings</Typography>
        </MenuItem>

        {/* Help & Support */}
        <MenuItem
          onClick={handleProfileClose}
          sx={{
            minHeight: 48,
            gap: 1.5,
            px: 2,
          }}
        >
          <HelpOutlineOutlinedIcon
            sx={{
              fontSize: 20,
              color: "text.secondary",
            }}
          />

          <Typography sx={{ fontSize: 15 }}>Help & Support</Typography>
        </MenuItem>

        <Divider />

        {/* Sign Out */}
        <MenuItem
          onClick={handleProfileClose}
          sx={{
            minHeight: 48,
            gap: 1.5,
            px: 2,
            color: "#E57373",
          }}
        >
          <LogoutOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#E57373",
            }}
          />

          <Typography
            sx={{
              fontSize: 15,
              color: "#E57373",
            }}
          >
            Sign Out
          </Typography>
        </MenuItem>
      </Menu>

      {/* ================= NOTIFICATION DRAWER ================= */}
      <Drawer
        anchor="right"
        open={notificationOpen}
        onClose={handleNotificationClose}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: "100%",
                sm: 400,
              },
              backgroundColor: "background.paper",
            },
          },
        }}
      >
        {/* Notification Header */}
        <Box
          sx={{
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Notifications
            </Typography>

            <Box
              sx={{
                px: 1,
                py: 0.3,
                borderRadius: 5,
                backgroundColor: "#FDEAEA",
                color: "#E57373",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              3 new
            </Box>
          </Box>

          <IconButton onClick={handleNotificationClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Notification List */}
        <Box>
          {notifications.map((notification) => (
            <Box
              key={notification.title}
              sx={{
                display: "flex",
                gap: 1.5,
                px: 2,
                py: 2,
                borderBottom: "1px solid",
                borderColor: "#F2F5F5",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  backgroundColor: notification.iconBackground,
                  color: notification.iconColor,
                }}
              >
                {notification.icon}
              </Box>

              {/* Content */}
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {notification.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.3,
                    fontSize: 14,
                    lineHeight: 1.35,
                    color: "text.secondary",
                  }}
                >
                  {notification.description}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.7,
                    fontSize: 12,
                    color: "text.secondary",
                  }}
                >
                  {notification.time}
                </Typography>
              </Box>

              {/* New indicator */}
              {notification.isNew && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    minWidth: 8,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    mt: 0.7,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
