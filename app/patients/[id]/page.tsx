"use client";

import { useParams, useRouter } from "next/navigation";

import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import AppShell from "@/components/layout/AppShell";

const patients = [
  {
    name: "Emily Johnson",
    id: "PT-10245",
    age: 32,
    gender: "Female",
    condition: "Hypertension",
    lastVisit: "Aug 18",
    status: "Stable",
    bloodGroup: "O+",
    dateOfBirth: "March 15, 1994",
    phone: "(555) 123-4567",
    email: "emily.j@email.com",
    address: "123 Oak Street, Springfield, IL 62704",
    emergencyName: "Robert Johnson",
    emergencyRelationship: "Spouse",
    emergencyPhone: "(555) 987-6543",
    bloodPressure: "120/80",
    heartRate: "72",
    temperature: "98.4",
    oxygen: "98%",
  },
  {
    name: "Michael Brown",
    id: "PT-10312",
    age: 45,
    gender: "Male",
    condition: "Diabetes T2",
    lastVisit: "Aug 16",
    status: "Follow-up",
    bloodGroup: "A+",
    dateOfBirth: "June 12, 1981",
    phone: "(555) 234-5678",
    email: "michael.b@email.com",
    address: "456 Pine Street, Springfield, IL 62704",
    emergencyName: "Lisa Brown",
    emergencyRelationship: "Spouse",
    emergencyPhone: "(555) 876-5432",
    bloodPressure: "128/82",
    heartRate: "76",
    temperature: "98.6",
    oxygen: "97%",
  },
  {
    name: "Olivia Davis",
    id: "PT-10198",
    age: 28,
    gender: "Female",
    condition: "Asthma",
    lastVisit: "Aug 14",
    status: "Stable",
    bloodGroup: "B+",
    dateOfBirth: "September 8, 1997",
    phone: "(555) 345-6789",
    email: "olivia.d@email.com",
    address: "789 Maple Street, Springfield, IL 62704",
    emergencyName: "John Davis",
    emergencyRelationship: "Father",
    emergencyPhone: "(555) 765-4321",
    bloodPressure: "118/76",
    heartRate: "70",
    temperature: "98.2",
    oxygen: "99%",
  },
  {
    name: "James Wilson",
    id: "PT-10087",
    age: 58,
    gender: "Male",
    condition: "Arrhythmia",
    lastVisit: "Aug 12",
    status: "Critical",
    bloodGroup: "AB+",
    dateOfBirth: "January 20, 1967",
    phone: "(555) 456-7890",
    email: "james.w@email.com",
    address: "321 Oak Avenue, Springfield, IL 62704",
    emergencyName: "Mary Wilson",
    emergencyRelationship: "Spouse",
    emergencyPhone: "(555) 654-3210",
    bloodPressure: "145/92",
    heartRate: "96",
    temperature: "98.7",
    oxygen: "94%",
  },
  {
    name: "Sophia Martinez",
    id: "PT-10423",
    age: 39,
    gender: "Female",
    condition: "Migraine",
    lastVisit: "Aug 10",
    status: "Stable",
    bloodGroup: "O-",
    dateOfBirth: "April 2, 1986",
    phone: "(555) 567-8901",
    email: "sophia.m@email.com",
    address: "654 Cedar Road, Springfield, IL 62704",
    emergencyName: "Carlos Martinez",
    emergencyRelationship: "Spouse",
    emergencyPhone: "(555) 543-2109",
    bloodPressure: "119/78",
    heartRate: "74",
    temperature: "98.5",
    oxygen: "98%",
  },
  {
    name: "Robert Lee",
    id: "PT-10356",
    age: 51,
    gender: "Male",
    condition: "High cholesterol",
    lastVisit: "Aug 08",
    status: "Follow-up",
    bloodGroup: "A-",
    dateOfBirth: "November 17, 1974",
    phone: "(555) 678-9012",
    email: "robert.l@email.com",
    address: "987 Birch Lane, Springfield, IL 62704",
    emergencyName: "Linda Lee",
    emergencyRelationship: "Spouse",
    emergencyPhone: "(555) 432-1098",
    bloodPressure: "130/84",
    heartRate: "78",
    temperature: "98.3",
    oxygen: "97%",
  },
];

function getStatusColor(status: string) {
  if (status === "Stable") {
    return {
      color: "#2E7D32",
      backgroundColor: "#E8F5E9",
    };
  }

  if (status === "Follow-up") {
    return {
      color: "#B26A00",
      backgroundColor: "#FFF4E5",
    };
  }

  return {
    color: "#C62828",
    backgroundColor: "#FFEBEE",
  };
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 13,
          color: "text.secondary",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: 0.3,
          fontSize: 14,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

function VitalCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <Box
      sx={{
        backgroundColor: "#E4F4E9",
        borderRadius: 2,
        p: 2,
        minHeight: 112,
      }}
    >
      <Typography
        sx={{
          fontSize: 13,
          color: "#34785D",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          fontSize: 23,
          fontWeight: 600,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          color: "text.secondary",
        }}
      >
        {unit}
      </Typography>

      <Chip
        label="Normal"
        size="small"
        sx={{
          mt: 0.5,
          height: 20,
          fontSize: 11,
          color: "#34785D",
          backgroundColor: "#FFFFFF",
        }}
      />
    </Box>
  );
}

export default function PatientDetailPage() {
  const params = useParams();
  const router = useRouter();

  const patientId = params.id as string;

  const patient = patients.find(
    (item) => item.id === patientId
  );

  if (!patient) {
    return (
      <AppShell pageTitle="Patient Details">
        <Box
          sx={{
            pt: 12,
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          <Typography variant="h4">
            Patient not found
          </Typography>

          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => router.push("/patients")}
            sx={{
              mt: 2,
              textTransform: "none",
            }}
          >
            Back to Patients
          </Button>
        </Box>
      </AppShell>
    );
  }

  const initials = patient.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <AppShell pageTitle="Patient Details">
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
        {/* Back */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/patients")}
          sx={{
            mb: 2,
            textTransform: "none",
            color: "primary.main",
            px: 0,
          }}
        >
          Back to Patients
        </Button>

        {/* Patient Header */}
        <Card
          elevation={0}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 54,
                  height: 54,
                  backgroundColor: "#DCECF8",
                  color: "#55A0CE",
                  fontSize: 18,
                }}
              >
                {initials}
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 22,
                    },
                    fontWeight: 600,
                  }}
                >
                  {patient.name}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 1,
                    mt: 0.3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    {patient.id}
                  </Typography>

                  <Typography color="text.secondary">
                    ·
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    {patient.gender}
                  </Typography>

                  <Typography color="text.secondary">
                    ·
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    {patient.age} years
                  </Typography>

                  <Typography color="text.secondary">
                    ·
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "text.secondary",
                    }}
                  >
                    Blood Group: {patient.bloodGroup}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Chip
                label={patient.status}
                size="small"
                sx={{
                  ...getStatusColor(patient.status),
                  fontWeight: 500,
                  borderRadius: 1.5,
                }}
              />

              <Button
                variant="contained"
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-flex",
                  },
                  textTransform: "none",
                  boxShadow: "none",
                }}
              >
                Edit Patient
              </Button>

              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>

        {/* Tabs */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
            overflowX: "auto",
          }}
        >
          {[
            "Overview",
            "Medical History",
            "Appointments",
            "Documents",
          ].map((tab, index) => (
            <Box
              key={tab}
              sx={{
                py: 1.5,
                px: 0.5,
                color:
                  index === 0
                    ? "primary.main"
                    : "text.secondary",
                borderBottom:
                  index === 0
                    ? "2px solid"
                    : "2px solid transparent",
                whiteSpace: "nowrap",
                fontSize: 14,
              }}
            >
              {tab}
            </Box>
          ))}
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.1fr 0.9fr",
            },
            gap: 2,
            mt: 2,
          }}
        >
          {/* Patient Information */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 2.5,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Patient Information
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                },
                columnGap: 4,
                rowGap: 2,
                mt: 2,
              }}
            >
              <InfoItem
                label="Full Name"
                value={patient.name}
              />

              <InfoItem
                label="Date of Birth"
                value={patient.dateOfBirth}
              />

              <InfoItem
                label="Gender"
                value={patient.gender}
              />

              <InfoItem
                label="Blood Group"
                value={patient.bloodGroup}
              />

              <InfoItem
                label="Phone"
                value={patient.phone}
              />

              <InfoItem
                label="Email"
                value={patient.email}
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <InfoItem
                label="Address"
                value={patient.address}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Emergency Contact
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                },
                gap: 2,
                mt: 1.5,
              }}
            >
              <InfoItem
                label="Name"
                value={patient.emergencyName}
              />

              <InfoItem
                label="Relationship"
                value={patient.emergencyRelationship}
              />

              <InfoItem
                label="Phone"
                value={patient.emergencyPhone}
              />
            </Box>
          </Card>

          {/* Current Vitals */}
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              p: {
                xs: 2,
                md: 2.5,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Current Vitals
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                },
                gap: 1.5,
              }}
            >
              <VitalCard
                label="Blood Pressure"
                value={patient.bloodPressure}
                unit="mmHg"
              />

              <VitalCard
                label="Heart Rate"
                value={patient.heartRate}
                unit="bpm"
              />

              <VitalCard
                label="Temperature"
                value={patient.temperature}
                unit="°F"
              />

              <VitalCard
                label="SpO₂"
                value={patient.oxygen}
                unit="Oxygen"
              />
            </Box>
          </Card>
        </Box>
      </Box>
    </AppShell>
  );
}