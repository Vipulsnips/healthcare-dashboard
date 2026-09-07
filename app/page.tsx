import { Box, Typography } from "@mui/material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "background.default",
        }}
      >
        <Topbar />

        {/* Page content */}
        <Box
          sx={{
            pt: 12,
            px: 4,
            pb: 4,
          }}
        >
          <Typography variant="h4">
            Good morning, Dr. Sarah
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Here's your clinical overview for today.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}