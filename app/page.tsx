import { Box, Button, Typography } from "@mui/material";

import AppShell from "@/components/layout/AppShell";
import StatCard from "@/components/dashboard/StatCard";
import RecentPatients from "@/components/dashboard/RecentPatients";

export default function Home() {
  return (
    <AppShell pageTitle="Dashboard">
      <Box
        sx={{
          pt: 12,
          px: {
            xs: 2,
            md: 4,
          },
          pb: 4,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
            mb: 4,
          }}
        >
          <Box>
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

        {/* Statistics */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
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

          <StatCard
            title="Follow-ups"
            value="12"
            subtitle="5 due today"
          />

          <StatCard
            title="Critical Alerts"
            value="3"
            subtitle="Requires attention"
          />
        </Box>

        <RecentPatients />
      </Box>
    </AppShell>
  );
}