"use client";

import { useState } from "react";

import { Box } from "@mui/material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

const drawerWidth = 240;

type AppShellProps = {
  children: React.ReactNode;
  pageTitle: string;
};

export default function AppShell({
  children,
  pageTitle,
}: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileOpen((previous) => !previous);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        mobileOpen={mobileOpen}
        onClose={handleDrawerClose}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "background.default",
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
        }}
      >
        <Topbar
          pageTitle={pageTitle}
          onMenuClick={handleMenuClick}
        />

        {children}
      </Box>
    </Box>
  );
}