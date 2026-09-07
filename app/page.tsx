import { Box, Button, Typography } from "@mui/material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import RecentPatients from "@/components/dashboard/RecentPatients";

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

        <Box
          sx={{
            pt: 12,
            px: 4,
            pb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography variant="h4">Good morning, Dr. Sarah</Typography>

              <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                Here's your clinical overview for today.
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                boxShadow: "none",
                px: 2.5,
              }}
            >
              + New Patient
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <StatCard
              title="Total Patients"
              value="1,248"
              subtitle="+12 this month"
            />

            <StatCard
              title="Today's Appointments"
              value="24"
              subtitle="8 remaining"
            />

            <StatCard title="Follow-ups" value="12" subtitle="5 due today" />

            <StatCard
              title="Critical Alerts"
              value="3"
              subtitle="Requires attention"
            />
          </Box>
          <RecentPatients />
        </Box>
      </Box>
    </Box>
  );
}
