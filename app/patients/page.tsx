import { Box, Button, Typography } from "@mui/material";

import AppShell from "@/components/layout/AppShell";
import PatientToolbar from "@/components/patients/PatientToolbar";
import PatientTable from "@/components/patients/PatientTable";
import PatientPagination from "@/components/patients/PatientPagination";

export default function PatientsPage() {
  return (
    <AppShell pageTitle="Patients">
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
        {/* Page Header */}
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
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h4">
              Patients
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              1,248 total patients under your care.
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

        <PatientToolbar />

        <PatientTable />

        <PatientPagination />
      </Box>
    </AppShell>
  );
}