import { Box, Button, Typography } from "@mui/material";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import PatientToolbar from "@/components/patients/PatientToolbar";
import PatientTable from "@/components/patients/PatientTable";
import PatientPagination from "@/components/patients/PatientPagination";

export default function PatientsPage() {
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
          {/* Page Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h4">Patients</Typography>

              <Typography color="text.secondary" sx={{ mt: 0.5 }}>
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
      </Box>
    </Box>
  );
}
