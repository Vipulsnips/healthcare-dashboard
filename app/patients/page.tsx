"use client";

import { useMemo, useState } from "react";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import AppShell from "@/components/layout/AppShell";
import PatientToolbar from "@/components/patients/PatientToolbar";
import PatientTable from "@/components/patients/PatientTable";
import PatientPagination from "@/components/patients/PatientPagination";

const patients = [
  {
    name: "Emily Johnson",
    id: "PT-10245",
    age: 32,
    gender: "Female",
    condition: "Hypertension",
    lastVisit: "Aug 18",
    status: "Stable",
  },
  {
    name: "Michael Brown",
    id: "PT-10312",
    age: 45,
    gender: "Male",
    condition: "Diabetes T2",
    lastVisit: "Aug 16",
    status: "Follow-up",
  },
  {
    name: "Olivia Davis",
    id: "PT-10198",
    age: 28,
    gender: "Female",
    condition: "Asthma",
    lastVisit: "Aug 14",
    status: "Stable",
  },
  {
    name: "James Wilson",
    id: "PT-10087",
    age: 58,
    gender: "Male",
    condition: "Arrhythmia",
    lastVisit: "Aug 12",
    status: "Critical",
  },
  {
    name: "Sophia Martinez",
    id: "PT-10423",
    age: 39,
    gender: "Female",
    condition: "Migraine",
    lastVisit: "Aug 10",
    status: "Stable",
  },
  {
    name: "Robert Lee",
    id: "PT-10356",
    age: 51,
    gender: "Male",
    condition: "High cholesterol",
    lastVisit: "Aug 08",
    status: "Follow-up",
  },
];

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPatients = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return patients.filter((patient) => {
      const matchesSearch =
        !search ||
        patient.name.toLowerCase().includes(search) ||
        patient.id.toLowerCase().includes(search) ||
        patient.condition.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        patient.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

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

        {/* Search + Filter */}
        <PatientToolbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />

        {/* Patient Table */}
        <PatientTable
          patients={filteredPatients}
        />

        {/* Pagination */}
        <PatientPagination />
      </Box>
    </AppShell>
  );
}