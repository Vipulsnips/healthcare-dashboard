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

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const drawerWidth = 240;

type TopbarProps = {
  pageTitle: string;
  onMenuClick: () => void;
};

export default function Topbar({
  pageTitle,
  onMenuClick,
}: TopbarProps) {
  return (
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
        {/* Mobile menu */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            onClick={onMenuClick}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              color: "text.primary",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            {pageTitle}
          </Typography>
        </Box>

        {/* Right side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0.5,
              md: 1.5,
            },
          }}
        >
          {/* Search */}
          <Box
            sx={{
              width: {
                xs: 140,
                sm: 200,
                md: 240,
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

          <IconButton
            sx={{
              color: "text.secondary",
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>

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