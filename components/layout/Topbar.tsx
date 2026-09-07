"use client";

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const drawerWidth = 240;

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",
          px: 4,
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
            gap: 1.5,
          }}
        >
          {/* Search */}
          <Box
            sx={{
              width: 240,
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

          {/* Notifications */}
          <IconButton
            sx={{
              color: "text.secondary",
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          {/* Profile */}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}